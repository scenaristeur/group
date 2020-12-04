<template>
  <div class="webid">
    {{ name }}
  </div>
</template>

<script>
import store from '@/store'
import { getSolidDataset,
  //saveSolidDatasetAt,
  getThingAll,
  //getThing,
  getStringNoLocale,
} from "@inrupt/solid-client";
import ProfileMixin from '@/mixins/ProfileMixin'
import { VCARD } from "@inrupt/vocab-common-rdf";

export default {
  store,
  props: ['item'],
  name: 'Item',
  mixins: [ProfileMixin],
  async created(){
    this.update()
  },
  data: function(){
    return {
      name: ""
    }
  },
  methods: {
    async update(){
      const dataset = await getSolidDataset(this.item);
      this.things = getThingAll(dataset, this.item);
      this.thing = this.things[0]
      this.name = getStringNoLocale(this.thing, VCARD.fn);
    }
  },
  watch:{
    item(){
      this.update()
    },
    webId(){
      console.log("watch webid", this.webId)
    }
  },
}
</script>
