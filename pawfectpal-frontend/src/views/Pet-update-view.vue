<template lang="html">
    <div class="container-fluid border rounded-3 my-2 p-2" id="green-banner">
        <div class="row my-2">
            <div class="col-4">
                <img src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w" class="w-75 rounded-circle ps-2">
            </div>
            
            <div class="col-8">
                <div class="text-start ">
                    <h3><b>Leo</b></h3>
                </div>
                <div class="row">
                    <div class="text-start">
                        <h5>3 years old</h5>
                        
                    </div>
                </div>
            </div>

        </div>
        <div class="row bg-white border rounded-3 mx-3 my-3 py-3 px-3 ">
            <div class="input-group my-auto mx-auto p-2 mt-3">
                <div class="col-12 form-group ">
                    <label for="exampleInput2" id="font-dark-green" class="mx-1 px-1" > Birthday </label>
                    <input 
                    type="date"
                    id="start"
                    class="form-control"
                    min="2001-01-01"
                    max="2023-12-31"
                    >
                </div>
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Breed">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="number" class="form-control rounded-3" id="petDetail" placeholder="Weight">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Medication">
            </div>
            
            <div class="col-12 my-auto mx-auto p-2">
                <div class="form-group">
                    <label for="exampleInput2" id="font-dark-green" class="mx-1 px-1"> Last Check-up done </label>
                    <input 
                    type="date"
                    id="start"
                    class="form-control"
                    min="2023-01-01"
                    max="2023-12-31"
                    >
                </div>
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3 " id="petDetail" placeholder="Description" >
            </div>
            
            <div class="col d-flex justify-content-center my-auto mx-auto p-2">
                <button
                    type="submit"
                    class="btn btn-outline-dark btn-sm"
                    @click="goToIndivPet"
                >
                Update
                </button>
            </div>
        

        </div>

        <div class="row my-2 mx-1 py-2 px-1"><h4>Group</h4>
            
        </div>

        <div class="row mx-2 px-2 ">
           <div id="font-dark-green" class="bg-light mx-auto p-2 border rounded-3 border-muted">
                Home
            </div>
        </div>
        
        <div class="row my-2 mx-1 py-2 px-1"><h4>Care Takers</h4>
            
        </div>

        <div class="row mx-2 px-2 mb-4">
           <div id="font-dark-green" class="bg-light mx-auto p-2 border rounded-3 border-muted">
                Jared
            </div>
            <div id="font-dark-green" class="bg-light mx-auto my-2 mb-5 p-2 border rounded-3 border-muted">
                Brandon
            </div>
        </div>

        
        
    </div>
</template>
<script>
export default {
  name: "Indiv-pet-view",
  components: {},
  methods:{
    goToIndivPet() {
      console.log("otw to indiv pet page");
      this.$router.push("/indivPetView");
    },
  },
};
</script>
<style lang="css">
</style>