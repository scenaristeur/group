<template>
  <div class="container fluid">
    <div class="nav">

      <b-button v-if="sup != undefined"
      :to="'/group?url='+sup"
      variant="outline-primary"
      size="sm">Super GRoup</b-button>
      <div class="m-2" v-if="st.files != undefined && st.files.length > 0">

        <b-dropdown id="dropdown-sg" text="Sous-GRoups" class="m-md-2" size="sm">
          <b-dropdown-item
          v-for="subgroup in st.files"
          :key="subgroup.url"
          :to="'/group?url='+subgroup.url+'#we'"
          variant="outline-info"
          size="sm">
          {{ subgroup.name}}
        </b-dropdown-item>
      </b-dropdown>




    </div>
    <div class="m-2" v-if="st.folders != undefined && st.folders.length > 0">

      <b-dropdown id="dropdown-dossiers" text="Dossiers" class="m-md-2" size="sm">
        <b-dropdown-item v-for="subfolder in st.folders"
        :key="subfolder.url"
        :to=" subfolder.url.endsWith('/inbox/') ? '/inbox?url='+subfolder.url : '/folder?url='+subfolder.url"
        variant="outline-primary"
        size="sm">
        <b-icon-mailbox v-if="subfolder.url.endsWith('/inbox/')"></b-icon-mailbox>
        {{ subfolder.name}}</b-dropdown-item>
      </b-dropdown>

    </div>
  </div>


  <div class="row">

  <b-card
  img-src="https://picsum.photos/600/300/?image=25"
  img-alt="Image"
  img-top
  tag="article"
  class="m-2 col">
  <b-card-title><a :href="url" target="_blank">{{name}}</a></b-card-title>

  <b-button v-if="inbox != undefined" :to="'/inbox?url='+inbox" variant="outline-primary" size="sm">
    <b-icon-mailbox></b-icon-mailbox> Inbox</b-button>
    <b-button :href="'https://scenaristeur.github.io/spoggy-simple?source='+url" variant="outline-primary" target="_blank" size="sm">Graphe</b-button>
    <b-button :to="'/profile?url='+maker" variant="outline-primary" size="sm">Admin</b-button>

    <b-card-header>
      {{ purpose }}
    </b-card-header>
    <b-card-text>
      <h5>Members</h5>
      <b-button :to="'/invite?url='+url" variant="outline-primary" size="sm" disabled >Inviter</b-button>
      <b-button :to="'/invite?url='+url" variant="outline-primary" size="sm" disabled >Partager</b-button>

      <b-button @click="join_req" variant="outline-primary" size="sm">Rejoindre</b-button>
      <br>
      <ul>
        <li v-for="m in members" :key="m">{{m}}</li>
      </ul>
    </b-card-text>

  </b-card>

  <Cockpit class="col-12 col-lg-9" :url="url"/>

</div>
</div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'
import ProfileMixin from '@/mixins/ProfileMixin'
let ldflex = window.solid
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc   = new FC( auth )
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Group',
  mixins: [GroupMixin, ProfileMixin],
  components: {
    'Cockpit': () => import('@/components/gouvernance/Cockpit')
  },
  created(){
    if(this.$route.query.url != undefined){
      this.url = this.$route.hash != undefined? this.$route.query.url+this.$route.hash : this.$route.query
      this.update()
    }
  },
  data: function () {
    return {
      group: {},
      name: "",
      purpose: "",
      created: "",
      inbox: "",
      maker: "",
      sup: undefined,
      members: "",
      st:"",
      subgroups: []
    }
  },
  methods: {
    async update(){
      this.name = await ldflex.data[this.url]['http://www.w3.org/2006/vcard/ns#fn']
      this.purpose = await ldflex.data[this.url]['http://www.w3.org/ns/org#purpose']
      this.created = await ldflex.data[this.url]['http://purl.org/dc/terms/created']

      this.inbox = await ldflex.data[this.url]['http://www.w3.org/ns/ldp#inbox']

      let maker = await ldflex.data[this.url]['http://xmlns.com/foaf/0.1/maker']
      this.maker = `${maker}`
      this.sup  = await ldflex.data[this.url]['http://www.w3.org/ns/org#subOrganizationOf']

      this.members = []
      for await (const member of ldflex.data[this.url]['http://www.w3.org/2006/vcard/ns#hasMember']){
        //  let g = {url:`${group}`, name: await ldflex.data[`${group}`].vcard$fn}
        this.members.push(`${member}`)
      }
      this.subgroups = []
      for await (const sg of ldflex.data[this.url]['http://www.w3.org/ns/org#hasSubOrganization']){
        //  let g = {url:`${group}`, name: await ldflex.data[`${group}`].vcard$fn}
        this.subgroups.push(`${sg}`)
      }
      this.st = await this.getGroupStorage(this.url)

    },
    async join_req(){
      //XHRPOSThttps://welcome.solidcommunity.net/groups/inbox/c17597e6-dd6e-4d7b-9343-362911038ad5/
      let join_request = `@prefix :      <#> .
      @prefix as:    <https://www.w3.org/ns/activitystreams#> .

      :it
      a as:Offer ;
      as:actor <${this.webId}> ;
      as:object :join ;
      as:summary "${this.webId} asks to join the group" ;
      as:target <${this.url}> .

      :join
      a as:Join ;
      as:actor <${this.webId}> ;
      as:object <${this.url}> ;
      as:summary "${this.webId} joins group" .`

      //  let join_path = this.inbox+"Requetes/"
      let join_path = `${this.inbox}`+'Requetes/'+uuidv4()+'.ttl'

      try{
        let created = await fc.postFile(join_path, join_request, "text/turtle")
        if(created.ok == true){
          alert("Demande envoyée")
        }
      }catch(e){
        console.log(e)
        alert("Erreur"+e)
      }

    }
  },
  watch:{

    async url(){
      console.log("update")
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
