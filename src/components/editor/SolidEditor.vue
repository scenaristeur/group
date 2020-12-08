<template>
  <div class="inbox">
    SolidEditor<hr>
    <!-- {{ folder}}<hr> -->
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

export default {
  name: 'SolidEditor',
  components: {
  //  'GroupTabs': () => import('@/components/group/GroupTabs')
  },
  created(){
    this.update()
  },
  data: function () {
    return {
      folder:{}
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
