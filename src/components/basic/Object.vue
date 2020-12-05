<template>
  <span>
    <span v-if="object.termType == 'NamedNode'">

        <router-link :to="'../?'+object.value"> {{ localname(object.value) }}</router-link>

    </span>
    <span v-else>
      <b>{{ object.value }}</b>
    </span>
  </span>
</template>

<script>
import store from '@/store'
//import { getSolidDataset, getThingAll} from "@inrupt/solid-client";
import ProfileMixin from '@/mixins/ProfileMixin'
import ConverterMixin from '@/mixins/ConverterMixin'

export default {
  store,
  props: ['object'],
  name: 'Object',
  mixins: [ProfileMixin, ConverterMixin],
  // components: {
  //   'Resource': () => import('@/components/basic/Resource')
  // },
  // async created(){
  // //  this.update()
  // },
  // data: function(){
  //   return {
  //     //resource: {}
  //   }
  // },
  // methods: {
  //   async update(){
  //     console.log('object', this.object)
  //     // const dataset = await getSolidDataset(this.item.url);
  //     // this.things = getThingAll(dataset, this.item.url);
  //     // this.resource = this.item
  //     // this.resource.things = this.things
  //   }
  // },
  // watch:{
  //   object(){
  //     this.update()
  //   },
  // },
}
</script>
