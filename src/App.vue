<template>
  <div id="app">

    <SideBar />
    <div id="nav">

      <router-link to="/">GRoups</router-link> |
      <router-link v-if="url == 'undefined'" to="/createGroup">Nouveau GRoup</router-link>
      <router-link v-else :to="'/createGroup?url='+url">Nouveau Sous-GRoup</router-link> |
      <router-link :to="'/browser?url='+url">Browser</router-link> |
      <router-link to="/about">A Propos</router-link>
      <SolidLoginButton />

    </div>

    <router-view class="container"/>

    <b-button variant="outline-dark" size="sm" href="https://www.patreon.com/smag0" target="_blank">
      Soutenir GRoup sur <img src="./assets/patreon.png" width="100px"/>
    </b-button>
    <SolidTrackSession />

    <hr>
    0.0.22 - integration browser
  </div>
</template>
<script>
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
let ldflex = window.solid
const popUri = 'https://solidcommunity.net/common/popup.html'

export default {
  name: 'App',
  components:{
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),
    'SideBar': () => import('@/components/layout/SideBar'),

  },
  data: function () {
    return {
  }
  },
  async   created(){

    let session = await auth.currentSession()
    if (!session) { session = await auth.popupLogin({ popupUri:popUri }) }
    this.webId = session.webId
    let st = await ldflex.data[session.webId]['http://www.w3.org/ns/pim/space#storage'] //this.getGroupStorage(this.group.super)
    this.storage = `${st}`
    this.current = this.storage
    this.update()
    console.log("Created of app must check webid")
  },
  methods: {
    // input(i){
    //   console.log(this.valeur,i.target.value)
    //
    // },
    // change(i){
    //   console.log(this.first)
    // },
    async select(selected){
      //  console.log(selected, selected.type)
      this.current = selected.url
      console.warn('[ optionnal : show folder structure in ttl format ( readfile(folder.url)) -> cool but less perf]')

      this.selected = selected

      if (selected.type == 'folder'){
        this.update()
      }else{
        //  console.log(selected)

        //  console.log(this.selected)
        this.closeNav()
      }
    },
    async go_parent(){
      this.current = this.parent
      this.selected = {}
      this.selected.url = this.parent
      this.update()
    },
    async  update() {
      let folder = await fc.readFolder( this.current )
      this.folder = folder
      this.parent = folder.parent
      console.warn(this.parent)
    },
    openNav() {
      this.$refs.mySidenav.style.width = "250px";
    },

    closeNav() {
      this.$refs.mySidenav.style.width = "0";
    }
    // onInitialized(ed){
    //   console.log(ed)
    // },
    // change(ch){
    //   console.log(ch)
    // }
  },
  computed:{
    url:{
      get: function() { return this.$route.hash != undefined ? this.$route.query.url+this.$route.hash : this.$route.query.urll},
      set: function() {}
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
