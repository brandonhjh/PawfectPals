<template lang="html">
  <nav class="navbar nav-bar-expand-lg">
    <div class="container">
      <div class="col-2 text-start">
        <div  id="font-dark-green" class="navbar-nav" @click="goToHome">&lt; Back</div>
      </div>
      <div id="font-dark-green" class="col-8 d-flex justify-content-center align-items-center">
        <h3>Notifications</h3>
      </div>
      <div  id="font-dark-green" class="col-2 text-end">Clear</div>
    </div>
  </nav>

  <div id="font-dark-green" class="container bg-white text-start">
    <h5 class="col px-2">Today</h5>
  </div>

  <div class="container">
    <div id="green-banner" class="row mx-0 pt-1 mb-1 rounded-4 border border-muted">
      <div class="col-8">
        <div  class="text-start">
          <b>Leo Medical Appointment </b>
        </div>
        <p class="text-start mb-1">
          Send for medical appt, rmb to bring medicine
        </p>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <div class="d-flex align-items-center">
          <div class="text-end">
            <small>8:00 pm</small>
          </div>
        </div>
      </div>
    </div>

    <div id="green-banner" class="row mx-0 pt-1 mb-1 rounded-4 border border-muted">
      <div class="col-8">
        <div class="text-start">
          <b>Leo Medical Appointment </b>
        </div>
        <p class="text-start mb-1">
          Send for medical appt, rmb to bring medicine
        </p>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <div class="d-flex align-items-center">
          <div class="text-end">
            <small>8:00 pm</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="font-dark-green" class="container text-start">
    <h5 class="col px-2">Yesterday</h5>
  </div>

  <div class="container">
    <div id="green-banner" class="row mx-0 pt-1 mb-1 rounded-4 border border-muted">
      <div class="col-8">
        <div class="text-start">
          <b>Leo Medical Appointment </b>
        </div>
        <p class="text-start mb-1">
          Send for medical appt, rmb to bring medicine
        </p>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <div class="d-flex align-items-center">
          <div class="text-end">
            <small>8:00 pm</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications-view",
  components: {},
  methods: {
    goToHome() {
      console.log("Otw to home page");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="css"></style>

