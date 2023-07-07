<template lang="html">
    <div class="container mt-4">
        <div id="green-banner"  class="row mx-1 rounded-top">
            <img src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg?format=1000w" class="mx-auto p-3 w-50 rounded-circle"/>
        </div> 
        <div id="green-banner" class="row mx-1 mb-2 ">
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="petName" placeholder="Pet Name">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="petBirthday" placeholder="Birthday">
                <input type="text" class="form-control input-space" placeholder="Age">
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="petBreed" placeholder="Breed">
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text"><img src="../assets/people.svg" alt="" class="pe-2">Group</label>
                <select class="form-select" id="petGroup">
                    <option selected>-No Group-</option>
                    <option value="Home">Home</option>
                    <option value="Aunt">Aunt</option>
                </select>
            </div>
            <div class="mb-3">
                <label class="form-label ps-1">Special Remarks</label>
                <textarea class="form-control" id="petRemarks" rows="3"></textarea>
            </div>
        </div>
        <div class = "row">
            <div class="col">
                <div class="position-absolute start-50 translate-middle my-4">
                    <button type="button" id="green-banner"  class="btn btn-outline-dark mt-2 py-1 px-2">Add Pet</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Create-pet-view",
    components: {},
}
</script>
<style lang="css">
    
</style>