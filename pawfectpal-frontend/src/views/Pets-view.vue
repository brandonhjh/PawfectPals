<template lang="html">
  <div class="container mt-4">
    <div class="row mx-1">
      <div class="col px-1">
        <h1 id="font-dark-green" class="display-1">All Pets</h1>
      </div>
    </div>

    <!-- Use v-for to loop through pets and display each one -->
    <div
      v-for="pet in pets"
      :key="pet.PetName"
      id="green-banner"
      class="row m-1 mb-3 rounded"
      @click="goToIndivPet(pet.PetName)" 
    >
      <div class="col-3 align-self-center text-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w" 
          class="w-75 rounded-circle py-3"
        />
        <br />
      </div>
      <div class="col-9 my-2 p-0 align-self-center text-start">
        <p class="h5 mb-1 fw-normal">{{ pet.PetName }}</p>
        <p class="m-0 fw-light">{{ pet.Remarks }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="position-absolute start-50 translate-middle mt-2">
          <img
            data-v-391f24cb=""
            src="../assets/plus-circle-black.svg"
            alt=""
            class=""
          />
          <small
            id="font-dark-green"
            class="ps-1"
            @click="goToAddPet"
          >Add New Pet</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios here

export default {
  name: "Pets-view",
  components: {},
  data() {
    return {
      pets: [], // Array to store fetched pets
    };
  },
  methods: {
    goToAddPet() {
      console.log("otw to add pet");
      this.$router.push("/createPets");
    },
    goToIndivPet(petName) {
      console.log("otw to indiv pet", petName);
      this.$router.push("/indivPetView");
    },
  },
  created() {
    // Make the Axios GET request to fetch all pets
    const apiUrl = "http://localhost:3000/GET/api/pet"; // Adjust the API endpoint
    axios
      .get(apiUrl)
      .then((response) => {
        // Store the fetched pets in the data variable
        this.pets = Object.values(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
        alert("Failed to fetch pets. Please try again.");
      });
  },
};
</script>

<style lang="css"></style>
