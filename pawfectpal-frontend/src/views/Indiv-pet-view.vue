<template lang="html">
    <div class="container-fluid border p-0" >
        <div class="row mt-3 mx-2 pt-2 rounded-top-3" id="green-banner">
            <div class="col-4 text-center">
                <img src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w" class="w-75 rounded-circle ps-2">
            </div>
            
            <div class="col-8 ps-0 pt-1">
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
        <div class="row mx-2 p-3 " id="green-banner">
            <div class="bg-white rounded">
                <div class="row m-0">
                    <div id="font-dark-green" class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted "> Birthday </div>
                    <div class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted text-dark text-center"> 01/06/2020 </div>
                </div>

                <div class="row m-0">
                    <div id="font-dark-green" class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted "> Breed </div>
                    <div id="font-dark-green" class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted"> Weight </div>
                </div>
                
                <div id="font-dark-green" class="my-auto mx-auto p-2 mt-3 border rounded-3 border-muted"> Description </div>  
                
                <div id="font-dark-green" class="my-auto mx-auto p-2 mt-3 border rounded-3 border-muted">
                    Medication
                </div>    
                
                <div class="row m-0">
                    <div id="font-dark-green" class="col-8 my-auto mx-auto p-2 mt-3 border rounded-start-3 border-muted"> Last check-up done </div>
                    <div class="col-4 my-auto mx-auto p-2 mt-3 border rounded-end-3 border-muted text-dark text-center"> 12/06/2023 </div>
                </div>

                <div class="col d-flex justify-content-center my-auto mx-auto p-2">
                    <button
                        type="submit" 
                        class="btn btn-outline-dark btn-sm"
                        @click="goToPetUpdate"
                    >
                    Edit
                    </button>
                </div>
            </div>
        </div>
        <div class="row mx-2 py-2 px-1" id="green-banner">
            <h4>Group</h4>
        </div>

        <div class="row mx-2 px-3 " id="green-banner">
           <div class="bg-white rounded p-2 ps-3">
            <p id="font-dark-green" class="m-auto"> Home </p>
           </div>
        </div>
        
        <div class="row mx-2 py-2 px-1" id="green-banner">
            <h4>Care Takers</h4>
        </div>

        <div class="row mx-2 px-2 mb-5 rounded-bottom-3" id="green-banner">
            <div class="col-3 align-self-center text-center">
                <div class="circle-singleline m-auto">
                    J
                </div>
                <div class="mt-1">
                    <p> Jared </p>
                </div>
            </div>
            <div class="col-3 align-self-center text-center">
                <div class="circle-singleline m-auto">
                    B
                </div>
                <div class="mt-1">
                    <p> Brandon </p>
                </div>
            </div>
        </div>


       
        
        
        
    </div>
</template>
<script>
export default {
  name: "Indiv-pet-view",
  components: {},
  methods:{
    goToPetUpdate() {
      console.log("otw to pet update page");
      this.$router.push("/petUpdate");
    },
  },
};
</script>
<style lang="css">
</style>

