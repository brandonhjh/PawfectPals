<template lang="html">
  <div class="container-fluid p-0">
    <div class="scrollable-content">
      <div class="row mt-3 mx-3 pt-2 rounded-top-3" id="green-banner">
        <div class="col-4 text-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w"
            class="w-75 rounded-circle ps-2"
          />
        </div>

        <div class="col-8 ps-0 pt-1">
          <div class="text-start">
            <h3>
              <b>{{ pet.PetName }}</b>
            </h3>
          </div>
          <div class="row">
            <div class="text-start">
              <h5>{{ pet.Age }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-3 p-3 pb-0 mb-5 rounded-bottom-3" id="green-banner">
        <div class="bg-white rounded p-3">
          <div class="row m-0">
            <div
              id="font-dark-green"
              class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted"
            >
              Birthday
            </div>
            <div
              class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted text-dark text-center"
            >
              {{ pet.Birthday }}
            </div>
          </div>

          <div class="row m-0">
            <div
              id="font-dark-green"
              class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted"
            >
              {{ pet.Breed }}
            </div>
            <div
              id="font-dark-green"
              class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted"
            >
              {{ pet.Weight }}
            </div>
          </div>

          <div
            id="font-dark-green"
            class="my-auto mx-auto p-2 mt-3 border rounded-3 border-muted"
          >
            {{ pet.Remarks }}
          </div>

          <div
            id="font-dark-green"
            class="my-auto mx-auto p-2 mt-3 border rounded-3 border-muted"
          >
            {{ pet.PetMedication }}
          </div>

          <div class="row m-0">
            <div
              id="font-dark-green"
              class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted"
            >
              Last check-up done
            </div>
            <div
              class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted text-dark text-center"
            >
              {{ pet.PetCheckUp }}
            </div>
          </div>

          <div class="col d-flex justify-content-center my-auto mx-auto p-2">
            <button
              type="submit"
              class="btn btn-outline-dark btn-sm"
              @click="goToPetUpdate"
            >
              Edit
            </button>
          </div>
        </div>

        <div class="row py-2">
          <h4>Group</h4>
        </div>

        <div class="row mx-auto px-3 bg-white rounded-3">
          <p id="font-dark-green" class="py-2 m-auto">{{ pet.Group }}</p>
        </div>

        <div class="row py-2">
          <h4>Care Takers</h4>
        </div>

        <div class="row px-auto">
          <div class="col-3 align-self-center text-center">
            <div class="circle-singleline m-auto">J</div>
            <div class="mt-1">
              <p>Jared</p>
            </div>
          </div>
          <div class="col-3 align-self-center text-center">
            <div class="circle-singleline m-auto">B</div>
            <div class="mt-1">
              <p>Brandon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Indiv-pet-view",
  components: {},
  methods: {
    goToPetUpdate() {
      console.log("otw to pet update page");
      this.$router.push("/petUpdate");
    },
  },
  data() {
    return {
      pet: {},
    };
  },
  created() {
    const petName = this.$route.params.petName;
    axios.get("http://localhost:3000/GET/api/pet").then((response) => {
      const matchedPet = Object.values(response.data).find(
        (pet) => pet.PetName == petName
      );
      if (matchedPet) {
        this.pet = matchedPet;
      }
    });
  },
};
</script>
<style lang="css"></style>
