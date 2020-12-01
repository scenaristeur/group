import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let solid = window.solid

export default new Vuex.Store({
  state: {
    webId: null,
    storage: null,
    groups: []
  },
  mutations: {
    setWebId(state, webId){
      state.webId = webId
    },
    setStorage(state, storage){
      state.storage = storage
    },
    setGroups(state, groups){
      state.groups = groups
    },
  },
  actions: {
    async setWebId(context, webId){
      context.commit('setWebId',webId)
      context.commit('setStorage', `${await solid.data[webId].storage}`)
      let groups = []
      for await (const group of solid.data[webId]['http://www.w3.org/ns/org#memberOf']){
      let g = {url:`${group}`, name: await solid.data[`${group}`].vcard$fn}
        groups.push(g)
      }
        context.commit('setGroups',groups)
      // let puti = await solid.data[webId].publicTypeIndex
      // console.log(`${puti}`)
      // let prti = await solid.data[webId].privateTypeIndex
      // console.log(`${prti}`)
    }
  },
  modules: {
  }
})
