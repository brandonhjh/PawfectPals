<template lang="html">
  <nav class="navbar nav-bar-expand-lg">
    <div class="container">
      <div class="col-2 text-start">
        <div id="font-dark-green" class="navbar-nav" @click="goToHome">
          &lt; Back
        </div>
      </div>
      <div
        id="font-dark-green"
        class="col-8 d-flex justify-content-center align-items-center"
      >
        <h3>Notifications</h3>
      </div>
      <div id="font-dark-green" class="col-2 text-end">Clear</div>
    </div>
  </nav>

  <div id="font-dark-green" class="container bg-white text-start">
    <h5 class="col px-2">Today</h5>
  </div>

  <div
    id="green-banner"
    class="row mx-0 pt-1 mb-1 rounded-4 border border-muted"
    v-for="event in displayed"
    :key="event.Time"
  >
    <div class="col-8">
      <div class="text-start">
        <b>{{ event.Title }}</b>
      </div>
      <p class="text-start mb-1">
        {{ event.Notes }}
      </p>
    </div>
    <div class="col-4 d-flex justify-content-end">
      <div class="d-flex align-items-center">
        <div class="text-end">
          <small>{{ event.Time }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Notifications-view",
  components: {},
  methods: {
    goToHome() {
      console.log("Otw to home page");
      this.$router.push("/");
    },
  },
  created() {
    const apiUrl = "http://localhost:3000/GET/api/task";
    axios.get(apiUrl).then((response) => {
      this.displayed = Object.values(response.data)
        .filter(
          (task) =>
            task.Calendar == true &&
            new Date(task.Date).setHours(0, 0, 0, 0) ==
              new Date().setHours(0, 0, 0, 0)
        )
        .sort(function (a, b) {
          return a.Time.localeCompare(b.Time);
        });
    });
  },
  data() {
    return {
      displayed: [],
    };
  },
};
</script>

<style lang="css"></style>
