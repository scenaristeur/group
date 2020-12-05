<template>
  <div class="container fluid">
    <h3>Nouveau GRoup</h3>
    <div v-if="webId != null">

        <b-form-input  ref="name"  class="m-3" v-model="group.name" placeholder="Nom du groupe"></b-form-input>
        <b-form-textarea  class="m-3" v-model="group.purpose" placeholder="Raison d'être"></b-form-textarea>
        <b-form-input   class="m-3" v-model="group.super" placeholder="Super groupe"></b-form-input>
        <b-form-select v-model="group.privacy" :options="privacy_options"   class="m-3"></b-form-select>
        <b-form-input  class="m-3" v-model="path" placeholder="Chemin"></b-form-input>

      <b-button @click="create" variant="primary">Créer</b-button><br>
      <small>
        {{ group}}
        {{ group_url}}
      </small>
    </div>
    <b-alert variant="info" show  v-else>Please login with a Solid webId to create a group !</b-alert>
  </div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'
import ProfileMixin from '@/mixins/ProfileMixin'

export default {
  name: 'CreateGroup',
  mixins: [GroupMixin, ProfileMixin],
  mounted(){
    if (this.$refs.name != undefined)
    this.$refs.name.focus()
  },
  data: function () {
    return {
      group:{privacy:"public"},
      privacy_options: [
        { value: 'public', text: 'Public. Tout le monde peut voir qui est dans le groupe et ce qui est publié' },
        { value: 'private', text: 'Privé. Seuls les membres peuvent voir qui est dans le groupe et ce qui est publié' }],
        group_url: null
      }
    },
    async created(){
      this.update()
    },
    methods: {
      async setSuperAndPath(url, hash){
        if(url != undefined){
          this.group.super = hash != undefined ? url+hash : url
        //  console.log(this.group.super)
          let folder = await this.getGroupStorage(this.group.super)
          this.path = `${folder.url}`
        //  console.log(this.path)
        }else{
          this.path = this.$store.state.storage+this.group.privacy+'/'
        }
      },
      async create() {
        this.group.path = this.path
        let group_result  = await this.createGroup(this.group)
      //  console.log("group result",group_result)
        this.group_url = group_result.url
        if(group_result.creation.status== "ok"){
          this.$router.push('group?url='+group_result.url+"#"+group_result.identifier)
        }
      },
      update(){
        if(this.$route.query.url != undefined){
          this.setSuperAndPath(this.$route.query.url, this.$route.hash)
        }else{
          this.path = this.storage+this.group.privacy+'/'
        }
        if (this.$refs.name != undefined)
        this.$refs.name.focus()
      }
    },
    watch:{
      url(){ this.group.super = this.url },
      $route(to){ this.setSuperAndPath(to.query.url, to.hash) },
      storage(){ this.update() },
      group(){ this.update() }
    },
    computed:{
      url:{
        get: function() { return this.$route.hash != undefined ? this.$route.query.url+this.$route.hash : this.$route.query.url},
        set: function() {}
      },
      path:{
        get: function() { return this.storage+this.group.privacy+'/'},
        set: function() {}
      }
    }
  }
  </script>
