<template lang="html">
  <div class="container mt-4">
    <div class="row mx-1">
      <div class="col px-1">
        <h1 class="display-1">All Pets</h1>
      </div>
    </div>

    <div class="row bg-light m-1 mb-3 rounded">
      <div class="col-3 align-self-center text-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w"
          class="w-75 rounded-circle py-3"
        />
        <br />
      </div>
      <div class="col-9 my-2 p-0 align-self-center text-start">
        <p class="h5 mb-1 fw-normal">Leo</p>
        <p class="m-0 fw-light">Group : Home</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="position-absolute start-50 translate-middle mt-2">
          <img
            data-v-391f24cb=""
            src="/img/plus-circle.2992868b.svg"
            alt=""
            class=""
          />
          <small class="ps-1" @click="goToAddPet">Add New Pet</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pets-view",
  components: {},
  methods: {
    goToAddPet() {
      console.log("otw to add pet");
      this.$router.push("groupAddPet");
    },
  },
};
</script>
<style lang="css"></style>
