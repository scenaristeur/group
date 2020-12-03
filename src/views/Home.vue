<template>
  <div class="home">
      <UserGroups />
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

      <HelloWorld msg="Bienvenue sur Ton application Group !"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    'UserGroups': () => import('@/views/UserGroups')
  }
}
</script>
