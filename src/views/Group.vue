<template>
  <div class=" container ">
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
    <b-card-header>{{ purpose }}</b-card-header>
    <b-card-text>
      <b-button v-if="sup != undefined" :to="'/group?url='+sup" variant="primary">Go Super</b-button>
      <b-button v-if="inbox != undefined" :to="'/inbox?url='+inbox" variant="primary">Inbox</b-button>

      members: {{members}}<br>
      subgroups: {{subgroups}}<br>
    sup  {{ sup }}
    </b-card-text>

    <b-button v-for="subfolder in st.folders" :key="subfolder.url" :to="'/group?url='+subfolder.url" variant="outline-primary">{{ subfolder.name}}</b-button>

    <b-button v-for="subgroup in st.files" :key="subgroup.url" :to="'/group?url='+subgroup.url+'#we'" variant="primary">{{ subgroup.name}}</b-button>


  created:   {{ created}}<br>   maker: {{ maker }}<br> storage: {{st}}<br>
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
