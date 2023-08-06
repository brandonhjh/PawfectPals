<template lang="html">
  <div class="container mt-4">
    <div id="green-banner" class="row mx-1 rounded-top">
      <img
        src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w"
        class="mx-auto p-3 w-50 rounded-circle"
      />
    </div>
    <div id="green-banner" class="row mx-1 mb-2">
      <div class="input-group mb-3">
        <input
          v-model="petName"
          type="text"
          class="form-control"
          id="PetName"
          placeholder="Pet Name"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="petBirthday"
          type="text"
          class="form-control"
          id="petBirthday"
          placeholder="Birthday"
        />
        <input
          v-model="petAge"
          type="text"
          class="form-control input-space"
          placeholder="Age"
        />
      </div>
      <div class="input-group mb-3">
        <input
          v-model="petBreed"
          type="text"
          class="form-control"
          id="petBreed"
          placeholder="Breed"
        />
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text"
          ><img src="../assets/people.svg" alt="" class="pe-2" />Group</label
        >
        <select v-model="petGroup" class="form-select" id="petGroup">
          <option selected>-No Group-</option>
          <option value="Home">Home</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label ps-1">Special Remarks</label>
        <textarea
          v-model="petRemarks"
          class="form-control"
          id="petRemarks"
          rows="3"
        ></textarea>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="position-absolute start-50 translate-middle my-4">
          <button
            type="button"
            id="green-banner"
            class="btn btn-outline-dark mt-2 py-1 px-2"
            @click="addPet"
          >
            Add Pet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios here

export default {
  name: "Create-pet-view",
  components: {},
  data() {
    return {
      petName: "",
      petBirthday: "",
      petAge: "",
      petBreed: "",
      petGroup: "",
      petRemarks: "",
    };
  },
  methods: {
    addPet() {
      // Create the pet data object
      const petData = {
        PetName: this.petName,
        Birthday: this.petBirthday,
        Age: this.petAge,
        Breed: this.petBreed,
        //Group: this.petGroup,
        Remarks: this.petRemarks,
      };

      // Make a POST request to your backend route for adding pets
      const apiUrl = "http://localhost:3000/POST/api/addPet"; // Adjust the API endpoint to match your backend route
      axios
        .post(apiUrl, petData)
        .then((response) => {
          // Handle the response from the server
          console.log(response.data); // This will log the response from the backend
          alert("Pet added successfully!"); // You can show an alert or use a toast notification library to show a success message
        })
        .catch((error) => {
          // Handle the error from the server
          console.error("Error adding pet:", error);
          alert("Failed to add pet. Please try again."); // You can show an alert or use a toast notification library to show an error message
        });
    },
  },
};
</script>

<style lang="css">
/* Your custom styles if needed */
</style>
