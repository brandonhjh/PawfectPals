<template lang="html">
  <div class="container mt-4">
    <div class="row">
      <p id="font-dark-green" class="display-2 fs-1 text-center">New Task</p>
    </div>
    <div id="green-banner" class="row mx-1 rounded-top">
      <div class="col-auto align-self-start p-0">
        <div class="mb-1 pb-2 ps-3 float-end">
          <button
            type="button"
            class="btn btn-sm mt-2 py-1 px-2 text-light"
            @click="goToHome"
          >
            Cancel
          </button>
        </div>
      </div>
      <div class="col align-self-end p-0">
        <div class="mb-1 pb-2 pe-3 float-end">
          <button
            type="button"
            class="btn btn-sm rounded-pill btn-outline-light mt-2 py-1 px-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <div id="green-banner" class="row mx-1 mb-2 pb-2 rounded-bottom">
      <div class="input-group">
        <input
          type="text"
          class="form-control rounded-bottom-0"
          id="taskTitle"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <textarea
          class="form-control rounded-top-0 border-top-0"
          id="taskNotes"
          placeholder="Notes"
          rows="3"
        ></textarea>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text pe-4"
          ><img src="../assets/Cat.svg" alt="" class="pe-2" />Pet
          &nbsp;&nbsp;</label
        >
        <select class="form-select" id="taskPet">
          <option selected>--</option>
          <option value="Leo">Leo</option>
          <option value="Milo">Milo</option>
        </select>
      </div>

      <div class="row mb-3">
        <div class="col-6 form-group">
          <label for="exampleInput2" class="mx-1 px-1"> Date </label>
          <input
            type="date"
            id="start"
            class="col-6 form-control ms-2 ps-2"
            min="2023-01-01"
            max="2023-12-31"
          />
        </div>
        <div class="col-6 form-group">
          <label for="timePicker" class="mx-1 px-1"> Time </label>
          <input type="time" id="start" class="col-6 form-control ms-2 ps-2" />
        </div>
      </div>
      <div class="ms-3 p-0 px-1 form-check form-switch">
        <label class="form-check-label" for="taskCalendar"
          >To be shown on calendar</label
        >
        <input
          class="form-check-input float-end me-4"
          type="checkbox"
          role="switch"
          id="taskCalendar"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Task-view",
  components: {},
  methods: {
    goToHome() {
      console.log("otw to Home page");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="css"></style>
