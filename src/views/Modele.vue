<template>
  <div class="inbox">
    Inbox



h
{{ folder}}-

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
