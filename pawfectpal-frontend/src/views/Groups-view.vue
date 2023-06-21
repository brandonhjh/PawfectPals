<template lang="html">
    <div class="container-sm my-1">
            <div class="row">
              <div class="col-5 p-2 ">
                <div class="p-1 rounded text-center">
                  <button type="button" class="btn btn-outline-dark my-1 "> + Join Group </button> 
                  
                </div>
              </div>
              <div class="col-2 ">
              </div>
              <div class="col-5 p-2">
                <div class="p-1 rounded text-center">
                  <a type="button" class="btn btn-outline-dark my-1" href="#" @click="goToCreateGroup">+ Create Group</a>
                </div>
              </div>
            </div>
    </div>

    <div class="container-sm mx-3 my-3 border rounded border-dark text-center bg-light">
        <div class="row">
            <div class="col-1 p-1 my-2 ">
                <img src="../assets/house.svg" alt="" class=" align-items-center w-100  ">
            </div>
            <div class="col-5 my-3 text-dark align-items-center d-flex " ><p>Hong Family</p></div>
            
        </div>
        <div class="row">
          <div class="col-1 "></div>
          <div class="col-5 my-2 align-items-center ">
            <button type="button" class="btn btn-outline-dark my-1 ">See Pets </button>
          </div>
          <div class="col-5 my-2 align-items-center">

            <button type="button" class="btn btn-outline-dark my-1">See members </button>
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
<style lang="css">
</style>
