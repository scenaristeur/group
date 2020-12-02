<template>
  <div class=" container ">
    <div class="nav">

      <div class="m-2" v-if="sup != undefined">Super groupe: <b-button  :to="'/group?url='+sup" variant="outline-primary" size="sm">Go Super</b-button></div>
      <div class="m-2" v-if="st.files != undefined && st.files.length > 0">
        Sous Groupes: <b-button v-for="subgroup in st.files" :key="subgroup.url" :to="'/group?url='+subgroup.url+'#we'" variant="outline-info" size="sm">{{ subgroup.name}}</b-button>
      </div>
      <div class="m-2" v-if="st.folders != undefined && st.folders.length > 0">
        Dossiers: <b-button v-for="subfolder in st.folders" :key="subfolder.url" :to="'/folder?url='+subfolder.url" variant="outline-primary" size="sm">{{ subfolder.name}}</b-button>
      </div>
    </div>


    <div class="row">
      <b-card
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"

      class="m-2">
      <b-card-title><a :href="url" target="_blank">{{name}}</a></b-card-title>
      <b-card-header>{{ purpose }}</b-card-header>
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
    <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"

    class="m-2 col">
    <b-card-title><a :href="url" target="_blank">{{name}}</a></b-card-title>
    <b-button v-if="inbox != undefined" :to="'/inbox?url='+inbox" variant="outline-primary" size="sm">Inbox</b-button>
    <b-button :href="'https://scenaristeur.github.io/spoggy-simple?source='+url" variant="outline-primary" target="_blank" size="sm">Graphe</b-button>
    <b-button :href="maker" variant="outline-primary" target="_blank" size="sm">Admin</b-button>

    <b-card-header>

      {{ purpose }}</b-card-header>
      <b-card-text>
        <br>Members: <b-button :to="'/invite?url='+url" variant="outline-primary" size="sm">Invite</b-button>
        <b-button :to="'/join?url='+url" variant="outline-primary" size="sm">Join</b-button>
        <br>
        <ul>
          <li v-for="m in members" :key="m">{{m}}</li>
        </ul>
        <!-- subgroups: {{subgroups}}<br>
        sup  {{ sup }} -->
      </b-card-text>

      created:   {{ created}}<br>

      <!-- storage: {{st}}<br> -->
    </b-card>
  </div>
</div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'
let ldflex = window.solid

export default {
  name: 'Group',
  mixins: [GroupMixin],
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
      sup: "",
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

      this.maker  = await ldflex.data[this.url]['http://xmlns.com/foaf/0.1/maker']
      this.sup  = await ldflex.data[this.url]['http://www.w3.org/ns/org#subOrganizationOf']

      this.members = []
      for await (const member of ldflex.data[this.url]['http://www.w3.org/2006/vcard/ns#hasMember']){
        //  let g = {url:`${group}`, name: await ldflex.data[`${group}`].vcard$fn}
        this.members.push(`${member}`)
      }
      this.st = await this.getGroupStorage(this.url)

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
