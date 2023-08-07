<template lang="html">
  <div class="container my-5">
    <div class="row mt-2 p-2">
      <div class="col display-5 text-center">Profile</div>
    </div>

    <div class="mx-1 mb-1 rounded-3" id="green-banner">
      <div class="row m-auto mb-3 pt-4">
        <div class="col">
          <label for="groupId" class="form-label">Account Created: </label>
          <div
            id="font-dark-green"
            class="my-auto mx-auto p-2 bg-white border rounded-3 border-muted"
          >
            {{ creationTime }}
          </div>
        </div>
      </div>

      <div class="row m-auto mb-3 pb-5">
        <div class="col">
          <label for="groupName" class="form-label">Email:</label>
          <div
            id="font-dark-green"
            class="my-auto mx-auto p-2 bg-white border rounded-3 border-muted"
          >
            {{ user.email }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>

        <button
          type="submit"
          class="btn btn-warning rounded-pill btn-sm"
          @click="$store.dispatch('logout')"
        >
          Log out
        </button>

        <div class="col"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Account-Page-view",
  components: {},
  computed: {
    ...mapState(["user", "creationTime"]),
  },
};
</script>

<style lang="css"></style>
