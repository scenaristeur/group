<template>
  <div>
    <b-button variant="warning" v-b-modal.modal-scrollable class="m-3 rounded" ><b-icon-vector-pen></b-icon-vector-pen> Nouveau Message</b-button>
    <b-list-group>
      <b-list-group-item @click="principale" href="#" active>Principale</b-list-group-item>
      <b-list-group-item
      v-for="fo in folder.folders"
      :key="fo.url"
      :to="fo.url.endsWith('/inbox/')
      || fo.url.endsWith('/Invitations/')
      || fo.url.endsWith('/Requetes/')
      || fo.url.endsWith('/Traites/')
      || fo.url.endsWith('/Corbeille/')
      ? '/inbox?url='+fo.url : '/folder?url='+fo.url">
      {{fo.name}}</b-list-group-item>

    </b-list-group>
  </div>
</template>

<script>
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc   = new FC( auth )

export default {
  name: 'InboxMenu',
  props: ['folder'],
  components: {

  },
  created(){
    this.update()
  },
  data: function () {
    return {

    }
  },
  methods: {
    async update() {
      // this.url = this.$route.query.url
      // console.log(this.url)
      // this.folder = await fc.readFolder(this.url)
    },
    principale(){
      let url = this.url.endsWith('/') ?  this.url.substring(0, this.url.length - 1) : this.url
      let parent = url.substring(0, url.lastIndexOf('/'));
      this.$router.push({path: '/inbox?url='+parent })
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
