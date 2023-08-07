<template>
  <div class="container mt-4 scrollable-content">
    <div class="row mx-1">
      <div class="col-4 px-1">
        <!-- Display selected date in the format "14 Aug" -->
        <h1 id="font-dark-green" class="display-1 formatted-date">{{ formattedSelectedDate }}</h1>
      </div>
      <div class="col-5 align-self-end p-0">
        <p class="h5 m-0 mb-1 pb-2">
          <small id="font-dark-green" class="text-muted">
            <input type="date" v-model="selectedDate" @change="fetchTasks" />
          </small>
        </p>
      </div>
      <div class="col-3 align-self-end p-0">
        <div class="mb-1 pb-2 pe-1 float-end">
          <img data-v-391f24cb="" src="../assets/plus-circle-black.svg" alt="" class="mb-1" />
          <small id="font-dark-green" class="ps-1" @click="goToTask">Add Task</small>
        </div>
      </div>
    </div>

    <div class="scrollable-content">
      <!-- Rows of tasks -->
      <div v-for="task in tasks" :key="task.Title"
        :class="{ 'row': true, 'm-1': true, 'py-1': true, 'rounded-3': true, 'green-banner': !task.CheckedCompleted, 'grey-banner': task.CheckedCompleted }">
        <div class="col-2 align-self-center white-text">{{ task.Time }}</div>
        <div class="col-2 align-self-center text-center white-text">
          <img
            src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w"
            class="img-fluid rounded-circle" />
          <br />
          {{ task.Pet }}
        </div>
        <div class="col-6 my-1 align-self-center text-start white-text">{{ task.Title }}</div>
        <div class="col-2 d-flex flex-column">
          <div class="checkbox align-self-center m-auto">
            <input id="task done" class="form-check-input" type="checkbox" :checked="task.CheckedCompleted"
              @change="toggleTaskCompleted(task)" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      currentDate: new Date(),
      tasks: [],
      selectedDate: new Date().toISOString().split("T")[0], // Initialize with today's date
    };
  },
  computed: {
    formattedDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return this.currentDate.toLocaleDateString("en-US", options);
    },
    formattedSelectedDate() {
      const dateOptions = { day: "numeric", month: "short" };
      const date = new Date(this.selectedDate);
      return date.toLocaleDateString("en-US", dateOptions);
    },
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await axios.get("http://localhost:3000/GET/api/task");
        const allTasks = response.data;

        //const today = DateTime.now().setZone("Asia/Singapore").toISODate();
        console.log(this.selectedDate);

        const filteredTasks = Object.values(allTasks).filter((task) => task.Date === this.selectedDate);

        this.tasks = filteredTasks.sort((a, b) => {
          const timeA = a.Time.split(":").map(Number);
          const timeB = b.Time.split(":").map(Number);
          return timeA[0] - timeB[0] || timeA[1] - timeB[1];
        });
      } catch (error) {
        console.error("Error fetching tasks:", error);
        // Handle the error here
      }
    },
    goToTask() {
      console.log("otw to task");
      this.$router.push("/task");
    },
    toggleTaskCompleted(task) {
      task.CheckedCompleted = !task.CheckedCompleted;
    }
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style lang="css">
.formatted-date {
  font-size: 30px;
  /* font size for the date text at the top */
}

.green-banner {
  background-color: #909c84;
  /* Green background color */
}

.grey-banner {
  background-color: #999999;
  /* Grey background color */
}

.white-text {
  color: white;
}

.scrollable-content {
  overflow-y: auto;
  max-height: calc(100vh - 220px);
}
</style>
