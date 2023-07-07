<template lang="html">
  <div class="container mt-4">
    <div class="row mx-1">
      <div class="col-4 px-1">
        <h1 id="font-dark-green" class="display-1">Today</h1>
      </div>
      <div class="col-5 align-self-end p-0">
        <p class="h5 m-0 mb-1 pb-2">
          <small id="font-dark-green" class="text-muted">19 June, 2023</small>
        </p>
      </div>
      <div class="col-3 align-self-end p-0">
        <div class="mb-1 pb-2 pe-1 float-end">
          <img
            data-v-391f24cb=""
            src="/img/plus-circle.2992868b.svg"
            alt=""
            class="mb-1"
          />
          <small id="font-dark-green" class="ps-1" @click="goToTask">Add Task</small>
        </div>
      </div>
    </div>

    <div id="green-banner" class="row m-1 rounded-3">
      <div class="col-2 align-self-center">8:00</div>
      <div class="col-2 align-self-center text-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w"
          class="img-fluid rounded-circle"
        />
        <br />
        leo
      </div>
      <div class="col-6 my-1 align-self-center text-start">
        information snakdfolnshajkldnsakl n klsandklasdnklasn dklas
      </div>
      <div class="col-2 d-flex flex-column">
        <div class="checkbox align-self-center m-auto">
          <input
            id="task done"
            class="form-check-input"
            type="checkbox"
            checked
          />
        </div>
        <div class="row">
          <div class="col align-self-end mb-1">
            <button type="button" class="btn btn-outline-light btn-sm py-0 px-1">
              more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home-view",
  components: {},
  methods: {
    goToTask() {
      console.log("otw to task");
      this.$router.push("/task");
    },
  },
};
</script>
<style lang="css"></style>
