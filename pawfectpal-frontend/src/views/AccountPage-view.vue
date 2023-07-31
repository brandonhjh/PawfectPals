<template lang="html">
  <div class="container my-5" >
    <div class="row mt-2 p-2">
      <div class="col display-5 text-center">
        Profile
      </div>
    </div>

    <div class="mx-1 mb-5 rounded-3" id="green-banner">

      <div class="row m-auto mb-3 pt-4">
        <div class="col">
          <label for="groupId" class="form-label">Account Name: </label>
            <div id="font-dark-green" class="my-auto mx-auto p-2 bg-white border rounded-3 border-muted">
                Jared Choy
            </div>
        </div>
      </div>

      <div class="row m-auto mb-5 pb-5">
        <div class="col">
          <label for="groupName" class="form-label">Email:</label>
            <div id="font-dark-green" class="my-1 mx-auto p-2 bg-white border rounded-3 border-muted">
                jared@gmail.com
            </div>
        </div>
      </div>
      
      
        
      
  </div>
  <div class="container mt-3 pt-3">
          <div class="row mt-4 pt-4">
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

          <div class="row my-2">
            <div class="col"></div>
          
              <button
                type="submit"
                class="btn btn-danger rounded-pill btn-sm"
              >
                Delete account
              </button>
          
          
            </div>
          </div>
        </div>

  
  
  </template>
  <script>
export default {
  name: "Account-Page-view",
  components: {},
};
</script>
  
  <style lang="css">
</style>
  