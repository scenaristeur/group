<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="url == 'undefined'" to="/createGroup">New Group</router-link>
      <router-link v-else :to="'/createGroup?url='+url">New Sub-Group</router-link>

       |
      <router-link to="/about">About</router-link>
      <SolidLoginButton />
    </div>
    <router-view class="container"/>
    <SolidTrackSession />
    0.0.7 - 404
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
