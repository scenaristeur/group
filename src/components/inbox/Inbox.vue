<template>
  <div class="container">
    <div v-if="webId != null">
      <NavBar :url="url" :folder="folder" />
      <div class="row">

        <InboxMenu class="col-3 d-lg-block d-none" :folder="folder" />

        <div class="col-12 col-lg-9">

          <div class="row">
            <div>
              <!-- <div class="h2 mb-0">
              <b-icon-arrow-up></b-icon-arrow-up>
              <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
            </div> -->
            <b-button-toolbar key-nav aria-label="Toolbar with button groups">
              <!-- <b-button-group class="mx-1">
              <b-button>&laquo;</b-button>
              <b-button>&lsaquo;</b-button>
            </b-button-group> -->
            <b-button-group class="mx-1">
              <b-button v-if="opened == true"
              @click="opened = false"
              class="h2 mb-0"
              variant="light">
              <b-icon-arrow-left ></b-icon-arrow-left>
            </b-button>
            <!-- <b-button>Edit</b-button>
            <b-button>Undo</b-button>
            <b-button>Redo</b-button> -->
            <b-button v-if="mail.url != undefined" variant="danger" @click="action('delete')">
              <b-icon-trash ></b-icon-trash>
            </b-button>
          </b-button-group>
          <!-- <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group> -->
      </b-button-toolbar>
    </div>
  </div>

  <div class="col">

    <b-list-group v-if="opened == false" class="scroll">
      <b-list-group-item v-for="fi in folder.files" :key="fi.url" @click="open(fi.url)" href="#" >{{fi.name}}</b-list-group-item>
      <b-list-group-item v-if="folder.files != undefined && folder.files.length == 0">Aucun message</b-list-group-item>
    </b-list-group>
    <div v-else class="container fluid">
      <div class="row mb-3 mt-3">
        <div class="col"><h5>{{ mail.title }}</h5></div>
        <div class="col-1">
          <button type="button" aria-label="Close" class="close" @click="opened = false">X</button>
        </div>
      </div>
      <div  class="row w-100">

        <div class="col">
          <b>{{ mail.maker }}</b> <small><i>{{ mail.created}}</i></small>
        </div>

        <b-button-group class="mx-auto col-2">

          <b-button v-b-modal.modal-scrollable @click="action('repondre')">
            <b-icon-vector-pen ></b-icon-vector-pen>
          </b-button>
          <b-dropdown dropleft >
            <template #button-content>
              <small>...</small>
            </template>
            <!-- <b-dropdown-item href="#" >Répondre</b-dropdown-item> -->
            <b-dropdown-item href="#" @click="action('chat')">Transférer au chat</b-dropdown-item>
            <b-dropdown-item href="#" @click="action('wiki')">Transférer au wiki</b-dropdown-item>
          </b-dropdown>
        </b-button-group>

      </div>


      <div class="scroll">
        <b-list-group v-if="mail.things != undefined">
          <b-list-group-item  v-for="thing in mail.things" :key="thing.internal_url">
            <div>
              {{ thing.internal_url}}


              <b-button-group class="float-right" v-if="thing.types.includes('https://www.w3.org/ns/activitystreams#Offer')">
                <b-button variant="success" size="sm" @click="action('accept')">Accepter</b-button>
                <b-button variant="warning" size="sm" @click="action('decline')">Refuser</b-button>
              </b-button-group>
            </div>

            <b-list-group style="clear: both;">
              <b-list-group-item  v-for="(quad,i) in thing.quads" :key="'quad_'+i" size="sm">
                <small>  {{localname(quad.subject.value)}} -> {{localname(quad.predicate.value)}} -->
                  {{ quad.object.termType == "NamedNode" ? localname(quad.object.value) : quad.object.value}}</small>
                </b-list-group-item>
              </b-list-group>


            </b-list-group-item>
          </b-list-group>

          {{ mail.content }}

        </div>


      </div>
    </div>

  </div>
</div>



<b-modal id="modal-scrollable" title="Destinataires" @ok="send" size="lg">
  <template #modal-header="{ close }">
    <h6>Nouveau message</h6>
    <b-button size="sm" variant="outline-danger" @click="close()">
      X
    </b-button>
  </template>
  <div class="container fluid">
    <div class="row">
      <!-- POUR L'auto completion des destinataires en fonction des membres du groupe, des amis...
      https://bootstrap-vue.org/docs/components/form-tags -->
      <label for="tags-basic">Destinataires</label>
      <b-form-tags input-id="tags-basic" v-model="destinataires" scrollable
      separator=" ,;"
      placeholder="Destinataires séparés par , ou ;"></b-form-tags>
    </div>
    <div class="row">


      <b-form-input class="col-9"  placeholder="Objet" v-model="message.objet"></b-form-input>

      <b-dropdown class="col-3">
        <template #button-content>
          <small>{{ message.type != null ? message.type.substring(0,4) : "type"  }}</small>
        </template>
        <b-dropdown-item href="#" @click="message.type = 'invitation'">Invitation</b-dropdown-item>
        <b-dropdown-item href="#" @click="message.type = 'requete'">Requête</b-dropdown-item>
        <b-dropdown-item href="#" @click="message.type = null">Aucun</b-dropdown-item>
      </b-dropdown>

      <!-- <div>
      <b-form-select v-model="message.type" :options="options" size="sm" class="mt-3"></b-form-select>
      <div class="mt-3">Selected: <strong>{{ message.type }}</strong></div>
    </div> -->

  </div>

  <b-textarea rows="12" placeholder="message">
    {{ message.content }}
  </b-textarea>

</div>

<template #modal-footer>
  <div class="w-100">
    <b-button
    variant="primary"
    size="sm"
    class="float-left"
    @click="send"
    >
    Envoyer
  </b-button>
  <p class="float-right">Options</p>

</div>
</template>

</b-modal>
</div>
<div v-else>Please login with a Solid webId to create a group !</div>
<!-- <hr><hr>
{{ folder}}<br>
{{ url}} -->
</div>
</template>

<script>
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import InboxMixin from '@/mixins/InboxMixin'
import ConverterMixin from '@/mixins/ConverterMixin'


export default {
  name: 'Inbox',
  mixins: [InboxMixin, ConverterMixin],
  components: {
    'NavBar': () => import('@/components/inbox/NavBar'),
    'InboxMenu': () => import('@/components/inbox/InboxMenu')
  },
  async  created(){
    this.url = this.$route.query.url
    let exists =   await fc.itemExists(this.url)
    !exists ? await fc.createFolder(this.url) : ""

    this.update()
  },
  data: function () {
    return {
      folder: {},
      opened: false,
      mail: {title: "titre", maker: "webbbbbid", content:"contenu ça fonctionne ?", created: ""},
      destinataires: ['Tous les membres du groupe', 'Annonce groupe', 'Transmettre aux sous-groupes', 'Mes amis',  'Article Wiki', 'Message Chat'],
      message: {type: null, content: "Contenu du message"},
    }
  },
  methods: {
    async accept(){
      //http://www.w3.org/2006/vcard/ns#hasMember
    },
    async decline(){

    },
    async send(){
      this.message.destinataires = this.destinataires // A transformer en webIds
      console.log("Message",this.message)
    },
    async action(act){
      console.log(act)
      switch (act) {
        case 'repondre':
        //  v-b-modal.modal-scrollable

        break;
        case "delete":
        console.log(this.mail.url)
        await fc.deleteFile(this.mail.url)
        this.mail = {}
        this.opened = false
        this.update()
        break;
        case "accept":
        this.mail.webId = this.webId
        console.log(this.mail)

        await this.accepte(this.mail)
        break;
        case "decline":
        await this.decline(this.mail)
        break;
        case "chat":

        break;
        case "wiki":

        break;
        default:

      }

    },
    async update() {
      console.log(this.url)
      try{
          this.folder = await fc.readFolder(this.url)
      }catch(e){
        console.log(e)
      }

    },
    async open(url){
      console.log(url)
      this.opened = true
      this.mail = await this.getMail(url)
      console.log("mail:",this.mail)
    }
  },
  watch:{
    url(){
      this.opened = false
      console.log(this.url)
      this.update()
    }
  },
  computed:{
    url:{
      get: function() { return this.$route.hash != undefined ? this.$route.query.url+this.$route.hash : this.$route.query.urll},
      set: function() {}
    },
  }
}
</script>
<style>
.scroll {
  border: 1px solid black;
  /* width:  250px;*/
  height: 380px;
  overflow-y: auto;
}

</style>
