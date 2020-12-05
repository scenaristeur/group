<template>
  <div id="app">


    <div id="nav">

      <router-link to="/">GRoups</router-link> |
      <router-link v-if="url == 'undefined'" to="/createGroup">Nouveau GRoup</router-link>
      <router-link v-else :to="'/createGroup?url='+url">Nouveau Sous-GRoup</router-link> |
      <router-link to="/about">A Propos</router-link>
      <SolidLoginButton />

    </div>

    <router-view class="container"/>

    <b-button variant="outline-dark" size="sm" href="https://www.patreon.com/smag0" target="_blank">
      Soutenir GRoup sur <img src="./assets/patreon.png" width="100px"/>
    </b-button>
    <SolidTrackSession />

    <hr>
    0.0.20 - membres
  </div>
</template>
<script>
export default {
  name: 'App',
  components:{
    'SolidLoginButton': () => import('@/components/solid/SolidLoginButton'),
    'SolidTrackSession': () => import('@/components/solid/SolidTrackSession'),

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
