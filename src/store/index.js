import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let solid = window.solid

export default new Vuex.Store({
  state: {
    webId: null,
    storage: null
  },
  mutations: {
    setWebId(state, webId){
      console.log("webId",webId)
      state.webId = webId
    },
    setStorage(state, storage){
      console.log("storage",storage)
      state.storage = storage
    },
  },
  actions: {
    async setWebId(context, webId){
      context.commit('setWebId',webId)
      context.commit('setStorage', `${await solid.data[webId].storage}`)
      // let puti = await solid.data[webId].publicTypeIndex
      // console.log(`${puti}`)
      // let prti = await solid.data[webId].privateTypeIndex
      // console.log(`${prti}`)
    }
  },
  modules: {
  }
})
