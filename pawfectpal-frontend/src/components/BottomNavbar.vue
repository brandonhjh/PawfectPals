<template>
  <nav id="green-banner" class="navbar fixed-bottom navbar-light ">
    <div class="container">
      <div class="navbar-nav d-flex flex-row justify-content-between align-items-center w-100">
        <a class="nav-link d-flex flex-column align-items-center text-white" href="#" @click="goToHome">
          <img src="../assets/house.svg" alt="" class="mb-1">
        <small>Home</small>
        </a>

        <a class="nav-link d-flex flex-column align-items-center text-white" href="#" @click="goToCalendar">
          <img src="../assets/calendar.svg" alt="" class="mb-1">
          <small>Calendar</small>
        </a>

        <a class="nav-link d-flex flex-column align-items-center text-white" href="#" @click="goToTask">
        <img src="../assets/plus-circle.svg" alt="" class="mb-1">
        <small>Task</small>
        </a>

        <a class="nav-link d-flex flex-column align-items-center text-white" href="#" @click="goToPets">
        <img src="../assets/Cat.svg" alt="" class="mb-1">
        <small>Pets</small>
        </a>

        <a class="nav-link d-flex flex-column align-items-center text-white " href="#" @click="goToGroups">
        <img src="../assets/people.svg" alt=""  class="mb-1">
        <small>Groups</small>
        </a>

      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'BottomNavbar',
  props: {
  },

  methods: {
    goToHome() {
      console.log("otw to home page");
      this.$router.push('/');
    },
    
    goToCalendar() {
      console.log("otw to Calendar page");
      this.$router.push('/calendar');
    },

    goToTask() {
      console.log("otw to Task page");
      this.$router.push('/task');
    },

    goToPets() {
      console.log("otw to Pets page");
      this.$router.push('/pets');
    },

    goToGroups() {
      console.log("otw to Groups page");
      this.$router.push('/groups');
    },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
small {
  font-size: 11px;
}
</style>
