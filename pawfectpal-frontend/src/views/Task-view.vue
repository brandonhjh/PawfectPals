<template lang="html">
    <div class="container mt-4">
      <div class="row">
        <p id="font-dark-green" class="display-2 fs-1 text-center">New Task</p>
      </div>
      <div id="green-banner" class="row mx-1 rounded-top">
        <div class="col-auto align-self-start p-0">
          <div class="mb-1 pb-2 ps-3 float-end">
            <button type="button" class="btn btn-sm mt-2 py-1 px-2 text-light" @click="goToHome">Cancel</button>
          </div>
        </div>
        <div class="col align-self-end p-0">
          <div class="mb-1 pb-2 pe-3 float-end">
            <button type="button" class="btn btn-sm rounded-pill btn-outline-light mt-2 py-1 px-2" @click="addTask">Add</button>
          </div>
        </div>
      </div> 
      <div id="green-banner" class="row mx-1 mb-2 pb-2 rounded-bottom ">
        <div class="input-group">
          <input v-model="taskData.Title" type="text" class="form-control rounded-bottom-0" id="taskTitle" placeholder="Title">
        </div>
        <div class="mb-3">
          <textarea v-model="taskData.Notes" class="form-control rounded-top-0 border-top-0" id="taskNotes" placeholder="Notes" rows="3"></textarea>
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text pe-4"><img src="../assets/Cat.svg" alt="" class="pe-2">Pet &nbsp;&nbsp;</label>
          <select v-model="taskData.Pet" class="form-select" id="taskPet">
            <option selected disabled>-- Select Pet --</option>
            <option v-for="pet in pets" :key="pet" :value="pet">{{ pet }}</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text"><img src="../assets/people.svg" alt="" class="pe-2">People</label>
          <select v-model="taskData.Member" class="form-select" id="taskMember">
            <option selected>--</option>
            <option value="Eaint">Eaint</option>
            <option value="Justin">Justin</option>
          </select>
        </div>
        <div class="row mb-3 ">
          <div class="col-6 form-group ">
            <label for="exampleInput2" class="mx-1 px-1" > Date </label>
            <input 
              v-model="taskData.Date"
              type="date"
              id="start"
              class="col-6 form-control ms-2 ps-2"
              min="2023-01-01"
              max="2023-12-31"
            >
          </div>
          <div class="col-6 form-group ">
            <label for="timePicker" class="mx-1 px-1" > Time </label>
            <input 
              v-model="taskData.Time"
              type="time"
              id="start"
              class="col-6 form-control ms-2 ps-2"
            >
          </div>
        </div>
        <div class="ms-3 p-0 px-1 form-check form-switch">
          <label class="form-check-label" for="taskCalendar">To be shown on calendar</label>
          <input class="form-check-input float-end me-4" type="checkbox" role="switch" id="taskCalendar" v-model="taskData.Calendar">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"; // Import Axios here
  
  export default {
    name: "Task-view",
    components: {},
    data() {
      return {
        taskData: {
          Title: "",
          Notes: "",
          Pet: null,
          //Member: "--",
          Date: "2023-01-01",
          Time: "00:00",
          Calendar: false,
        },
        pets: [],
      };
    },
    methods: {
      goToHome() {
        console.log("otw to Home page");
        this.$router.push("/");
      },
      addTask() {
        // const taskData = {
        //     Title: this.Title,
        //     Notes: this.Notes,
        //     Pet: this.Pet,
        //     Date: this.Date,
        //     Time: this.Time,
        //     Calendar: this.Calendar
        // }
        const apiUrl = "http://localhost:3000/POST/api/addTask"; // Adjust the API endpoint to match your backend route
        console.log('Sending task data:', { taskData: this.taskData });
        axios
          .post(apiUrl, this.taskData)
          .then((response) => {
            console.log(response.data);
            alert("Task added successfully!");
          })
          .catch((error) => {
            console.error("Error adding task:", error);
            alert("Failed to add task. Please try again.");
          });
      },
      fetchPets() {
        const apiUrl = "http://localhost:3000/GET/api/pet"; // Adjust the API endpoint to match your backend route
        axios
          .get(apiUrl)
          .then((response) => {
            this.pets = Object.keys(response.data);
          })
          .catch((error) => {
            console.error("Error fetching pets:", error);
          });
      },
    },
    mounted() {
      this.fetchPets();
    },
  };
  </script>
  
  <style lang="css">
  /* Your custom styles if needed */
  </style>
  

