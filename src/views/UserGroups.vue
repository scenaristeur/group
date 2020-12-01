<template>
  <div>
    <div v-if="webId != null">
      g{{ groups }}h
    </div>
    <div v-else>Please login with a Solid webId to see your groups !</div>
  </div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'

export default {
  name: 'UserGroups',
  mixins: [GroupMixin],
  // data: function () {
  //   return {
  //
  //     }
  //   },
  //   methods: {
  //
  //   },
  computed:{
    groups:{
      get: function() { return ['group1']},
      set: function() {}
    },

  }

}
</script>
