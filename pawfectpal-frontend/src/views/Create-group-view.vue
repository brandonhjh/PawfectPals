<template lang="html">
  <div class="container my-5" >
    <div class="row mt-2 p-2">
      <div class="col display-5 text-center">
        Create Group
      </div>
    </div>
    <div class="mx-1 mb-5 rounded-3" id="green-banner">
        
      <div class="row m-auto mb-3 pt-4">
        <div class="col">
          <label for="groupId" class="form-label">Group ID:</label>
          <input type="text" class="form-control p-auto" id="groupId" placeholder="Enter Group Id"/>
        </div>
      </div>
      <div class="row m-auto mb-3 pb-1">
        <div class="col">
          <label for="groupName" class="form-label">Group Name:</label>
          <input type="text" class="form-control" id="groupName" placeholder="Enter Group Name"/>
        </div>
      </div>
      <div class="container mt-5 pt-5">
        <div class="row mt-4 pt-4 pb-2">
          <div class="col d-flex justify-content-end">
            <button type="submit" class="btn btn-outline-light rounded-pill btn-sm">
              Save
            </button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-danger rounded-pill btn-sm" @click="goToGroups">
              Cancel
            </button>
          </div>
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
