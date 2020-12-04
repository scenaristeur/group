let ldflex = window.solid
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

const { namedNode } = require('@rdfjs/data-model');

export default {
  created(){
    this.webId = this.$store.state.webId
    this.storage = this.$store.state.storage
  },
  methods: {
    async getStorage(url){
      let res = url.endsWith('#we') || url.endsWith('#this') ? url : url+'#we'
      console.log("REEEES",res)
      let storage = await ldflex.data[res].storage
      console.log(`${storage}`)
      if (`${storage}` == undefined){
        var path = this.url.substring(0,this.url.lastIndexOf("/"))
        let name = await ldflex.data[res].vcard$fn

        let ttl_name = `${name}`.trim().replace(/\s/g, '_')
        console.log(`${name}`, this.url, ttl_name)
        storage = [path, ttl_name, ""].join('/')
        console.log(storage)
        await !fc.itemExists(this.storage) ? await fc.createFolder(this.storage) : ""
        await ldflex.data[res]['http://www.w3.org/ns/pim/space#storage'].set(namedNode(storage))
      }
      return `${storage}`
    },
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
