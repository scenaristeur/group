<template>
  <div class="container">
    <NavBar />
    <div class="row">

      <div class="col-3">
        <b-button variant="warning" v-b-modal.modal-scrollable size="lg" class="m-3 rounded" >Nouveau Message</b-button>
        <b-list-group>
          <b-list-group-item href="#" active>Boîte de reception</b-list-group-item>
          <b-list-group-item v-for="fo in folder.folders" :key="fo.url" href="#some-link">{{fo.name}}</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </div>

      <div class="col-9">

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
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
          <b-button>Redo</b-button>
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

    <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
    <b-list-group-item href="#" >Link with active state</b-list-group-item>
    <b-list-group-item href="#">Action links are easy</b-list-group-item>
    <b-list-group-item href="#foobar">Disabled link</b-list-group-item>
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
      <b-dropdown>


        <template #button-content>
          <small>...</small>
        </template>
        <!-- <b-dropdown-item href="#" >Répondre</b-dropdown-item> -->
        <b-dropdown-item href="#" @click="action('chat')">Transférer au chat</b-dropdown-item>
        <b-dropdown-item href="#" @click="action('wiki')">Transférer au wiki</b-dropdown-item>
      </b-dropdown>
  </b-button-group>

    </div>


    <div class="scroll">{{ mail.content }}</div>


  </div>
</div>

</div>
</div>



<b-modal id="modal-scrollable" title="Destinataires" @ok="send">
  <template #modal-header="{ close }">
    <h6>Nouveau message</h6>
    <b-button size="sm" variant="outline-danger" @click="close()">
      X
    </b-button>
  </template>
  <div class="container fluid">
    <div class="row">
      <label for="tags-basic">Destinataires</label>
      <b-form-tags input-id="tags-basic" v-model="destinataires"
      separator=" ,;"
      placeholder="Ajoutez un nouveau destinataire en les séparant par une virgule ou un point virgule."></b-form-tags>
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
  <b-textarea rows="12" placeholder="message"> {{ message.content }}</b-textarea>

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

<hr><hr>
{{ folder}}<br>
{{ url}}
</div>
</template>

<script>
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc   = new FC( auth )

export default {
  name: 'Inbox',
  components: {
    'NavBar': () => import('@/components/inbox/NavBar')
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
      destinataires: ['Tous les membres du groupe'],
      message: {type: null, content: "Contenu du message"},
    }
  },
  methods: {
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
        case "chat":

        break;
        case "wiki":

        break;
        default:

      }
      console.log(act)
    },
    async update() {
      console.log(this.url)
      this.folder = await fc.readFolder(this.url)
    },
    async open(url){
      console.log(url)
      this.opened = true
      //  this.mail = {}
    }
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
