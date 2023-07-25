<template>
<nav id="green-banner" class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <!-- Brand/logo -->
        <div class="navbar-nav ml-auto ">
          <li class="nav-item mx-auto my-auto p-auto">
            <a href="#">
              <img src="../assets/person.svg" alt="" style="opacity: 100; stroke=white;" @click="goToAccount"  >
            </a>
          </li>
            
        </div>
      <!-- Centered text -->
      <div class="navbar-text mx-auto text-white" @click="goToHome">
      PawfectPals
      
      </div>
      
      <!-- Icon on the right end -->
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
        <a href="#">
            <img src="../assets/bell.svg" alt="" @click="goToNotifications">
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
        },
        goToAccount() {
            console.log("otw to account page");
            this.$router.push('/accountPage');
        },

    },
}



</script>


<style lang="css">
    
</style>