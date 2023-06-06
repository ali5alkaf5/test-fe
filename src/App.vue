<template>
  <div class="min-h-screen flex flex-col">
    <Header/>
    <div class="flex flex-row gap-0 flex-grow">
      <SideNav/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Users from './pages/Users.vue';
import SideNav from './layouts/SideNav.vue';
import Header from './layouts/Header.vue';
export default {
  name: "App",
  components: {
    Users,
    SideNav,
    Header,
  }
}
</script>

<style scoped>
</style>
