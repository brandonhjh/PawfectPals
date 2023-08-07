<template lang="html">
  <div class="container mt-4">
    <div class="row mx-1">
      <div class="col px-1">
        <h1 id="font-dark-green" class="display-1">My Group</h1>
      </div>
    </div>

    <div id="green-banner" class="row m-1 rounded-3">
      <div class="col-7 d-flex ps-3 justify-content-left">
        <div class="d-flex align-items-center">
          <img src="../assets/house.svg" alt="" class="" />
          <p class="mb-0">&nbsp; Home</p>
        </div>
      </div>

      <div class="col-5 align-items-center py-1" role="group">
        <div class="btn btn-group-vertical">
          <button
            type="button"
            class="btn rounded-pill btn-outline-light btn-sm w-100"
            @click="goToAllPets"
          >
            Pets
          </button>
          <button
            type="button"
            class="btn rounded-pill btn-outline-light btn-sm px-3 w-100 mt-1"
            @click="goToGroupMember"
          >
            Members
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <div class="mt-2">
          <img
            data-v-391f24cb=""
            src="../assets/plus-circle-black.svg"
            alt=""
            class=""
          />
          <small id="font-dark-green" class="ps-1" @click="goToJoinGroup"
            >Join Group</small
          >
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

    goToJoinGroup() {
      console.log("otw to join existing group");
      this.$router.push("/joinGroup");
    },

    goToAllPets() {
      console.log("otw to all pets page");
      this.$router.push("/pets");
    },

    goToGroupMember() {
      console.log("otw to members of group view");
      this.$router.push("/groupMember");
    },
  },
};
</script>
<style lang="css"></style>
