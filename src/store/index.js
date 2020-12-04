import Vue from 'vue'
import Vuex from 'vuex'
import chat from './modules/chat'
Vue.use(Vuex)

let ldflex = window.solid

export default new Vuex.Store({
  state: {
    webId: null,
    storage: null,
    groups: []
  },
  mutations: {
    setWebId(state, webId){
      console.log(webId)
      state.webId = webId
    },
    setStorage(state, storage){
        console.log(storage)
      state.storage = storage
    },
    setGroups(state, groups){
    //  console.log(groups)
      state.groups = groups
    },
  },
  actions: {
    async setWebId(context, webId){
      context.commit('setWebId',webId)
      if (webId != null){
        context.commit('setStorage', `${await ldflex.data[webId].storage}`)
        let groups = []
        console.log("TODO: remplacer par solid-client-js peut-il eviter les nombreux appels ?")
        for await (const group of ldflex.data[webId]['http://www.w3.org/ns/org#memberOf']){
        //  console.log(`${group}`)
          let g = {url:`${group}`, name: await ldflex.data[`${group}`].vcard$fn}
          groups.push(g)
          context.commit('setGroups',groups)
        }

      }
      // let puti = await solid.data[webId].publicTypeIndex
      // console.log(`${puti}`)
      // let prti = await solid.data[webId].privateTypeIndex
      // console.log(`${prti}`)
    }
  },
  modules: {
    chat,
  }
})
