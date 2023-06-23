<template>
  <TopNavbar v-if="$store.state.user && showTopNavbar"/>
  <RouterView></RouterView>
  <BottomNavbar v-if="$store.state.user"/>
</template>

<script>
import BottomNavbar from './components/BottomNavbar.vue';
import TopNavbar from './components/TopNavbar.vue';
import { onBeforeMount } from 'vue';
import {useStore} from 'vuex'
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
  },

  setup() {
    const store = useStore()

    onBeforeMount(()=> {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  }
}
</script>

<style>
</style>
