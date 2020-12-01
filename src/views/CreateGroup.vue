<template>
  <div class="home">
    <div v-if="webId != null">
      <b-form-group>
        <b-form-input  ref="name" size="lg" class="m-3" v-model="group.name" placeholder="Nom du groupe"></b-form-input>
        <b-form-textarea size="lg" class="m-3" v-model="group.purpose" placeholder="Raison d'être"></b-form-textarea>
        <b-form-input  size="lg" class="m-3" v-model="group.super" placeholder="Super groupe"></b-form-input>
        <b-form-select v-model="group.privacy" :options="privacy_options"  size="lg" class="m-3"></b-form-select>
        <b-form-input size="lg" class="m-3" v-model="group.path" placeholder="Chemin"></b-form-input>
      </b-form-group>
      <b-button @click="create" variant="primary">Créer</b-button>
      <p>
      {{ group_url}}
    </p>   
    </div>
    <div v-else>Please login with a Solid webId to create a group !</div>
  </div>
</template>

<script>
import GroupMixin from '@/mixins/GroupMixin'

export default {
  name: 'CreateGroup',
  mixins: [GroupMixin],
  mounted(){
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
    methods: {
      async create() {
        this.group_url = await this.createGroup(this.group)
      }
    }
  }
  </script>
