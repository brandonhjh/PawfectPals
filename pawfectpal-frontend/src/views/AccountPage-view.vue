<template lang="html">
    
    <div class="container my-5 " >
    <div id="green-banner" class="container border rounded-4 pt-4 pb-3 " >
      <div class="mb-1 mt-5 pt-5 ">
        <label for="groupId" class="form-label">Account Name:</label>
      </div>
      <div id="font-dark-green" class="my-auto mx-auto p-2 bg-white border rounded-3 border-muted">
                Jared Choy
        </div>

      <div class="mb-1 pb-1 mt-3">
        <label for="groupName" class="form-label">Email:</label>
      </div>
      <div id="font-dark-green" class="my-1 mx-auto p-2 bg-white border rounded-3 border-muted">
                jared@gmail.com
        </div>

      <div class="container mt-5 pt-5">
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
          
          <div class="col"></div>
        </div>
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
  