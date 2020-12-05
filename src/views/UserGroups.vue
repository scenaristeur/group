<template>
  <div>
    <div v-if="webId != null">
      MES GROUPES
      <div v-if="groups.length > 0">{{ groups.length }} GRoups.</div>

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
import ProfileMixin from '@/mixins/ProfileMixin'

export default {
  name: 'UserGroups',
  mixins: [GroupMixin, ProfileMixin],
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
