<template>
  <div>
  <b-button variant="warning" v-b-modal.modal-scrollable class="m-3 rounded" ><b-icon-vector-pen></b-icon-vector-pen> Nouveau Message</b-button>
  <b-list-group>
    <b-list-group-item href="#" active>Principale</b-list-group-item>
    <b-list-group-item v-for="fo in folder.folders" :key="fo.url" href="#some-link">{{fo.name}}</b-list-group-item>
    <b-list-group-item variant="danger" href="/inbox?url=https%3A%2F%2Fspoggy-test7.solidcommunity.net%2Fpublic%2Fdfcv%2Finbox%2F">Url test</b-list-group-item>
    <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
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
    }
  }
}
</script>
