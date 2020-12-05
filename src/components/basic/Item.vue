<template>
  <Resource :resource="resource" />
</template>

<script>
import store from '@/store'
import { getSolidDataset, getThingAll} from "@inrupt/solid-client";
import ProfileMixin from '@/mixins/ProfileMixin'

export default {
  store,
  props: ['item', 'block'],
  name: 'Item',
  mixins: [ProfileMixin],
  components: {
    'Resource': () => import('@/components/basic/Resource')
  },
  async created(){
    this.update()
  },
  data: function(){
    return {
      resource: {}
    }
  },
  methods: {
    async update(){
      const dataset = await getSolidDataset(this.item.url);
      this.things = getThingAll(dataset, this.item.url);
      this.resource = this.item
      this.resource.things = this.things
    }
  },
  watch:{
    item(){
      this.update()
    },
  },
}
</script>
