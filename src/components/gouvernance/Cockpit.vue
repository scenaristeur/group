<template>
  <div class="container fluid">
    <b-tabs content-class="m-1 container fluid" fill>
      <b-tab v-for="b in blocks" :key="b.name" class="container fluid">
        <template #title :title="b.name">
          <b-icon :icon="b.icon" v-if="b.icon != undefined" ></b-icon> <div v-else>{{b.name}}</div>
        </template>
        <!-- <div class="scroll container fluid"> -->
          <div v-if="b.type=='Wiki'">
            <Wiki :url="url"/>
          </div>
          <div v-if="b.type=='Chat'">
            <ChatList :url="url"/>
          </div>
          <div v-if="b.type=='Projet'">
            <Projets :url="url"/>
          </div>
          <div v-else-if="b.type == 'Action' || b.type == 'Tension'">
            <List :url="url" :block="b" />
          </div>
          <div v-else v-html="b.description"> </div>
          <b>{{b.name}}</b> for {{ url }}.<br>
        <!-- </div> -->
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import store from '@/store'

export default {
  store,
  name: 'Cockpit',
  components:{
    //  'Generique': () => import('@/components/gouvernance/Generique.vue'),
    'Projets': () => import('@/components/gouvernance/Projets.vue'),
    'Wiki': () => import('@/components/gouvernance/Wiki.vue'),
    'ChatList': () => import('@/components/chat/ChatList.vue'),
    'List': () => import('@/components/basic/List.vue'),

  },
  props:['url'],
  data: function(){
    return {
      blocks: [
        {type: "Tension", name: "Tensions", icon:"lightning"},
        {type: "Action", name: "Mes prochaines actions", icon: "file-play"},
        {type: "Projet", name: "Projets"},
        {type: "Checklist", name: "CheckList", icon: "list-check", description: "Ce dont on a besoin pour terminer une action ou un projet. <br>   [[ voir spoggy-group pour l'ajout , checkbox]]"},
        {type: "Indicateur", name: "Indicateurs", icon:"file-earmark-bar-graph"},
        {type: "Reunion", name: "Réunions", icon:"calendar3"},
        {type: "Wiki", name: "Wiki", icon:"receipt", description: "La fonctionnalité de création d'article sera bientôt opérationnelle. En attendant, vous pouvez utiliser <a href='https://scenaristeur.github.io/solid-vue-panes/post' target='_blank'>Popock post</a> et notamment l'outil Dokieli" },
        {type: "Chat", name: "Chat", icon: "chat"},
        {type: "Celebration", name: "Celebration", icon: "trophy"},
      ],
    }
  },
  methods: {
    paneChange(p){
      console.log(p)
    },
    add(b){
      console.log("block", b)
    }
  },
}
</script>
<style>
.scroll {
  overflow-y: scroll;
  min-width: 400px;
  height: 400px;
}
</style>
