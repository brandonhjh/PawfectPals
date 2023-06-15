<template>
  <TopNavbar v-if="showTopNavbar"/>
  <RouterView></RouterView>
  <BottomNavbar/>
</template>

<script>
import BottomNavbar from './components/BottomNavbar.vue';
import TopNavbar from './components/TopNavbar.vue';

export default {
  name: 'App',
  components: {
    TopNavbar,
    BottomNavbar
},
  data() {
    return {
      showTopNavbar: true
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.path === '/notifications') {
        // If the current route is '/notifications', hide the top navigation bar
        this.showTopNavbar = false;
      } else {
        // For other routes, show the top navigation bar
        this.showTopNavbar = true;
      }
      next();
    });
  }
}
</script>

<style>
</style>
