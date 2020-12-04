<template>
  <div id="app">


    <div id="nav">

      <router-link to="/">Accueil</router-link> |
      <router-link v-if="url == 'undefined'" to="/createGroup">Nouveau Groupe</router-link>
      <router-link v-else :to="'/createGroup?url='+url">Nouveau Sous-Groupe</router-link> |
      <router-link to="/about">A Propos</router-link>
      <SolidLoginButton />
    </div>
    <router-view class="container"/>
    <SolidTrackSession />
    0.0.16 - cockpit
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
