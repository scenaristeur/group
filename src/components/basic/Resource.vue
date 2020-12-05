<template>
  <div class="scroll">

    <b-list-group v-if="resource.things != undefined">
      <b-list-group-item  v-for="thing in resource.things" :key="thing.internal_url">
        <div>
          {{ thing.internal_url}}

          <b-button-group class="float-right" v-if="thing.types != undefined && thing.types.includes('https://www.w3.org/ns/activitystreams#Offer')">
            <b-button variant="success" size="sm" @click="action('accept')">Accepter</b-button>
            <b-button variant="warning" size="sm" @click="action('decline')">Refuser</b-button>
          </b-button-group>
        </div>

        <b-list-group style="clear: both;">
          <b-list-group-item  v-for="(quad,i) in thing.quads" :key="'quad_'+i" size="sm">
            <small>  {{localname(quad.subject.value)}} -> {{localname(quad.predicate.value)}} -->
              <Object :object="quad.object" />
            </small>
          </b-list-group-item>
        </b-list-group>

      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import ConverterMixin from '@/mixins/ConverterMixin'
//let ldflex = window.solid
// import { createDocument, fetchDocument } from 'tripledoc';
// import { vcard, dct, foaf, ldp, /*rdfs,*/ rdf, space} from 'rdf-namespaces'
// import auth from 'solid-auth-client';
// import FC from 'solid-file-client'
// const fc = new FC( auth )

export default {
  name: 'Resource',
  props: ['resource'],
  components: {
    'Object': () => import('@/components/basic/Object')
  },
  mixins: [ConverterMixin],
  // created(){
  // //  this.update()
  // },
  // methods: {
  //   async update() {
  //     console.log("RESOURCE",this.resource)
  //   }
  // },
}
</script>
