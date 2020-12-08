<template>
  <div class="inbox">
    Browser<hr>
    <!-- {{ folder}}<hr> -->
    {{ url}}

    <!-- <div  v-if="first == true" > -->
    <SolidEditor :file="selected" />
    <!-- </div>
    <div v-else> -->
    <EditorJs :file="selected" />
    <!-- </div> -->


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
  name: 'Browser',
  components: {
    'SolidEditor': () => import('@/components/editor/SolidEditor.vue'),
    'EditorJs': () => import('@/components/editor/EditorJs.vue'),
    //  'GroupTabs': () => import('@/components/group/GroupTabs')
  },
  created(){
    this.update()
  },
  data: function () {
    return {
      folder:{},
      selected: {}
    }
  },
  methods: {
    async update() {
      this.url = this.$route.query.url
      console.log('Browser',this.url)
      this.folder = await fc.readFolder(this.url)
    }
  },
  watch: {
    url(){
      console.log(this.url)
    },
    $route(to){
      console.log( to.hash, to.query.url)
      this.update()
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
