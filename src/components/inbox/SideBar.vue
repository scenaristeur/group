<template>
  <b-sidebar id="sidebar-1" title="Boite de reception" shadow>
    <!-- <div class="px-3 py-2">
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
      </p>
      <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
    </div> -->
   <InboxMenu :folder="folder" />
 </b-sidebar>
</template>

<script>
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc   = new FC( auth )

export default {
  name: 'SideBar',
  props: ['folder'],
  components: {
  'InboxMenu': () => import('@/components/inbox/InboxMenu')
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
      this.url = this.$route.query.url
      console.log(this.url)
      this.folder = await fc.readFolder()
    }
  }
}
</script>
