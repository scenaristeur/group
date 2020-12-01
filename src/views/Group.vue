<template>
  <div>
    <div v-if="webId != null">
      url : {{ url }}
    </div>
    <div v-else>Please login with a Solid webId to see your groups !</div>
  </div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'

export default {
  name: 'Group',
  //props: ['url'],
  mixins: [GroupMixin],
  created(){
    console.log(this.$route)
  },
  // data: function () {
  //   return {
  //     url: "alo"
  //   }
  // },
  //   methods: {
  //
  //   },
  computed:{
    url:{
      get: function() { return this.$route.hash != undefined ? this.$route.query.url+this.$route.hash : this.$route.query.urll},
      set: function() {}
    },
  }

}
</script>
