<template lang="html">

  <div class="container my-5 " >
    <div id="green-banner" class="container border rounded-4 pt-4 pb-3 " >
      <div class="mb-3 mt-5 pt-5 ">
        <label for="groupId" class="form-label">Group ID:</label>
        <input
          type="text"
          class="form-control"
          id="groupId"
          placeholder="Enter Group Id"
        />
      </div>
      <div class="mb-3 pb-1">
        <label for="groupName" class="form-label">Group Name:</label>
        <input
          type="text"
          class="form-control"
          id="groupName"
          placeholder="Enter Group Name"
        />
      </div>
      <div class="container mt-5 pt-5">
        <div class="row mt-5 pt-5">
          <div class="col"></div>
          <div class="col d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-outline-light rounded-pill btn-sm"
            >
              Save
            </button>
          </div>
          <div class="col d-flex justify-content-center">
            <button type="button" class="btn btn-danger rounded-pill" @click="goToGroups">
              Cancel
            </button>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Create-group-view",
  components: {},
  methods:{
    goToGroups() {
      console.log("otw back to Group page");
      this.$router.push("/groups");
    },
  },
};
</script>

<style lang="css">
</style>
