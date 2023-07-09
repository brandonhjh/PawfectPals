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
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Birthday">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Breed">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Weight">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3" id="petDetail" placeholder="Medication">
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <label class="input-group-text pe-4">Yearly Checkup Done &nbsp;&nbsp;</label>
                <select class="form-select" id="petCheckUp">
                    <option selected>--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="input-group my-auto mx-auto p-2">
                <input type="text" class="form-control rounded-3 " id="petDetail" placeholder="Description" >
            </div>
            
            <div class="col d-flex justify-content-center my-auto mx-auto p-2">
                <button
                    type="submit"
                    class="btn btn-outline-dark btn-sm"
                >
                Update
                </button>
            </div>
        

        </div>
        
        
    </div>
</template>
<script>
export default {
  name: "Indiv-pet-view",
  components: {},
};
</script>
<style lang="css">
</style>

