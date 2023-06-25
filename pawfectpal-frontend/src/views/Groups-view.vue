<template lang="html">
  <div class="container my-1">
    <div class="row">
      <div class="col-5">
        <div class="rounded text-center">
          <button type="button" class="btn my-1">+ Join Group</button>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-5 align-self-end">
        <div class="rounded">
          <a type="button" class="btn my-1" href="#" @click="goToCreateGroup"
            >+ Create Group</a
          >
        </div>
      </div>
    </div>

    <div class="row m-1 border rounded">
      <div class="col-7 d-flex justify-content-left">
        <div class="d-flex align-items-center">
          <img src="../assets/house.svg" alt="" class="" />
          <p class="mb-0">Hong Family</p>
        </div>
      </div>

      <div class="col-5 align-items-center py-1" role="group">
        <div class="btn btn-group-vertical">
          <button
            type="button"
            class="btn rounded btn-outline-dark btn-sm w-100"
          >
            See Pets
          </button>
          <button
            type="button"
            class="btn rounded btn-outline-dark btn-sm w-100 mt-1"
          >
            See members
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Group-view",
  components: {},

  methods: {
    goToCreateGroup() {
      console.log("otw to Create Groups page");
      this.$router.push("/createGroup");
    },
  },
};
</script>
<style lang="css"></style>
