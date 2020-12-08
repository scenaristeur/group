<template>
  <div class="inbox">
    Calendar<hr>
    <v-app id="dayspan" v-cloak>
      <Calendar :calendar="calendar" />
    </v-app>
    {{ folder}}<hr>
    {{ url}}
  </div>
</template>

<script>
//let ldflex = window.solid
// import { createDocument, fetchDocument } from 'tripledoc';
// import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { Calendar } from 'dayspan';

export default {
  name: 'Calendrier',
  components: {
    //'Calendar': () => import('dayspan')
  },
  created(){
    this.update()
  },
  data: function () {
    return {
      folder:{},
      calendar: Calendar.months()
    }
  },
  methods: {
    async update() {
      this.url = this.$route.query.url
      console.log(this.url)
      this.url != undefined ? this.folder = await fc.readFolder(this.url) : ""
    }
  },
  watch: {
    url(){
      console.log(this.url)
    }
  },
  computed:{
    webId:{
      get: function() { return this.$store.state.webId},
      set: function() {}
    },
    storage:{
      get: function() { return this.$store.state.storage},
      set: function() {}
    },
  }
}
</script>
<style>
body, html, #app, #dayspan {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
}
</style>
