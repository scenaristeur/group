<template>
  <div>

    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="(fi,i) in folder.files" :key="'dyn-tab-' + i">
          <template #title>
            <small>{{decodeURI(fi.name)}}</small>
          </template>
          <Item :item="fi" :block="block" />
          <b-button size="sm" variant="danger" class="float-right" @click="closeItem(fi)">
            Close {{ block.type }}
          </b-button>
        </b-tab>

        <b-button v-for="fo in folder.folders" :key="fo.url">{{fo.name}}</b-button>

        <!-- <b-list-group v-if="folder.files != undefined">
        <b-list-group-item  v-for="fi in folder.files.slice().reverse()" :key="fi.url">

        <Item :item="fi" />
        {{fi.name}}

      </b-list-group-item>
    </b-list-group> -->

    <!-- New Tab Button (Using tabs-end slot) -->
    <template #tabs-end>
      <b-nav-item role="presentation" @click.prevent="newItem" href="#"><b>+</b></b-nav-item>
    </template>

    <!-- Render this if no tabs -->
    <template #empty>
      <div class="text-center text-muted">
        Il n'y a aucun {{ block.type }} ouvert<br>
        Ouvrez un nouveau {{ block.type }} en cliquant sur le bouton <b>+</b> juste au dessus.
      </div>
    </template>
  </b-tabs>
</b-card>
</div>
</template>

<script>
import store from '@/store'
import ProfileMixin from '@/mixins/ProfileMixin'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )


export default {
  store,
  name: 'List',
  props: ['url', 'block'],
  components:{
    'Item': () => import('@/components/basic/Item.vue'),
  },
  mixins: [ProfileMixin],
  async created(){

    this.update()
  },
  data: function(){
    return {
      items: [],
      itemCounter: 0,
      folder: {}
    }
  },
  methods: {
    closeItem(x) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === x) {
          this.items.splice(i, 1)
        }
      }
    },
    async newItem() {
      let item = {id: this.itemCounter, name: this.block.type+"#_"+this.itemCounter, block: this.block}
      this.items.push(item)
      this.itemCounter++
      this.$router.push({path:'/edit', query: {item: item}})
    },
    async update(){
      console.log("URL", this.block.type, this.url)
      this.block.url = this.url
      this.block.storage = await this.getStorage(this.url)
      this.block.path = this.block.storage+this.block.type+"/"
      console.log(fc)
      console.log(this.block)
       !await fc.itemExists(this.block.path) ? fc.createFolder(this.block.path) : ""
       this.folder = await fc.readFolder(this.block.path)
    },
  },
  watch:{
    url(){
      this.update()
    },
    block(){
      this.update()
    }
  },
}
</script>
