<template lang="html">
    <div class="container-fluid p-0">
        <div class="mx-2 mt-3 mb-5 rounded-3" id="green-banner">
            <div class="row mx-auto pt-2">
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
            <div class="bg-white border rounded-3 m-3 p-2 mb-2">
                <div class="input-group my-auto mx-auto p-2 mt-2">
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
                <div class="input-group mx-2 w-auto">
                    <input type="text" class="form-control" id="petBreed" placeholder="Breed">
                    <input type="text" class="form-control" id="petWeight" placeholder="Weight">
                </div>
                <div class="input-group my-auto mx-auto p-2">
                    <input type="text" class="form-control rounded-3" id="petMedication" placeholder="Medication">
                </div>
                <div class="input-group my-auto mx-auto p-2">
                    <input type="text" class="form-control rounded-3 " id="petDescription" placeholder="Description" >
                </div>
                <div class="col-12 mx-auto p-2">
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

            <div class="row mx-auto px-1 pb-2">
                <h4>Group</h4>
            </div>

            <div class="row mx-3 px-3 bg-white rounded-3">
                <p id="font-dark-green" class="py-2 m-auto"> Home </p>
            </div>
            
            <div class="row mx-auto py-2 px-1">
                <h4>Care Takers</h4>
            </div>

            <div class="row mx-1 ">
                <div class="col-3 px-1 align-self-center text-center">
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