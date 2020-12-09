<template>
  <div class="landing">

    <b-alert show variant="dark">
      Envie de participer à l'amélioration du monde qui nous entoure ?
      Alors commence par répondre à au moins l'une de ces questions...
    </b-alert>

    <div>
      <b-card-group columns>
        <b-card title="Question n° 1:" img-src="https://picsum.photos/300/200/?image=41" img-alt="Image" img-top>
          <b-card-text>
            <b-form-group label="Que ferais-tu si tu avais">
              <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
                <b-form-radio value="100">100 €</b-form-radio>
                <b-form-radio value="1000">1000 €</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            de plus par mois ?
          </b-card-text>
          <b-form-textarea
          id="textarea1"
          v-model="text1"
          placeholder="..."
          rows="3"
          max-rows="6"
          ></b-form-textarea>
          <template #footer>
            <b-button href="#" variant="primary">Répondre</b-button>
          </template>
        </b-card>

        <b-card title="Question n° 2:" img-src="https://picsum.photos/300/300/?image=4" img-alt="Image" img-top>
          <b-card-text>
            Quel super-pouvoir souhaiterais-tu avoir l'utiliserais-tu ?
          </b-card-text>
          <b-form-textarea
          id="textarea2"
          v-model="text2"
          placeholder="..."
          rows="3"
          max-rows="6"
          ></b-form-textarea>
          <template #footer>
            <b-button href="#" variant="primary">Répondre</b-button>          </template>
          </b-card>

          <b-card title="Question n°3:" img-src="https://picsum.photos/300/400/?image=42" img-alt="Image" img-top>
            <b-card-text>
              Non, plus sérieusement, j'ai besoin de
              <b-form-input v-model="text3" placeholder="La chose dont j'ai besoin"></b-form-input>
              pour
              <!-- <b-form-input v-model="text4" placeholder="Ce que je ferais avec"></b-form-input> -->
              <b-form-textarea
              id="textarea4"
              v-model="text4"
              placeholder="Ce que je ferais avec..."
              rows="3"
              max-rows="6"
              ></b-form-textarea>
            </b-card-text>
            <template #footer>
              <b-button href="#" variant="primary">Répondre</b-button>
            </template>
          </b-card>
        </b-card-group>
      </div>


      <!-- {{ folder}}<hr> -->
      {{ url}}
    </div>
  </template>

  <script>
  //let ldflex = window.solid
  // import { createDocument, fetchDocument } from 'tripledoc';
  // import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
  import auth from 'solid-auth-client';
  import FC from 'solid-file-client'
  const fc = new FC( auth )

  export default {
    name: 'Landing',
    components: {
      //  'GroupTabs': () => import('@/components/group/GroupTabs')
    },
    created(){
      this.update()
    },
    data: function () {
      return {
        folder:{},
        url: "",
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        score: ""
      }
    },
    methods: {
      async update() {
        this.url = this.$route.query.url
        console.log(this.url)
        this.url != undefined ? this.folder = await fc.readFolder(this.url) : ""
      }
    },
    watch: {
      url(){
        console.log(this.url)
      }
    },
    computed:{
      webId:{
        get: function() { return this.$store.state.webId},
        set: function() {}
      },
      storage:{
        get: function() { return this.$store.state.storage},
        set: function() {}
      },
    }
  }
  </script>
