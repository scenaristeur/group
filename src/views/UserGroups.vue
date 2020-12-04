<template>
  <div>
    <div v-if="webId != null">
      <b-list-group>
        <b-list-group-item v-for="g in groups" :key="g.url" :to="{ path: '/group?url='+g.url}" >
          {{ g.name || g.url}}
        </b-list-group-item>
      </b-list-group>
    </div>
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
      get: function() { return this.$store.state.groups},
      set: function() {}
    },

  }

}
</script>
