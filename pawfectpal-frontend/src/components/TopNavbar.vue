<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Brand/logo -->
        <div class="navbar-nav ml-auto">
            <img src="../assets/bell.svg" alt="" style="opacity: 0;">
        </div>
      <!-- Centered text -->
      <div class="navbar-text mx-auto" @click="goToHome">
      PawfectPals
      </div>
      
      <!-- Icon on the right end -->
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
        <a href="#">
            <img src="../assets/bell.svg" alt="" @click="goToNotifications">
        </a>
        </li>
        <li class="nav-item">
          <a href="#">
            <img src="../assets/box-arrow-right.svg" alt="" @click="$store.dispatch('logout')">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
    name: "TopNavbar",
    components: {
    },

    methods: {
        goToHome() {
            console.log("otw to home page");
            this.$router.push('/');
        },
        goToNotifications() {
            console.log("otw to notifications page");
            this.$router.push('/notifications');
        }
    },
}



</script>


<style lang="css">
    
</style>