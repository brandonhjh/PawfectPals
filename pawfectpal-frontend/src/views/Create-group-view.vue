<template lang="html">
    
    <div class="container-fluid  ">
        
        <div class="text-light"> . </div>
        <div class="text-light"> . </div>
        <div class="text-light"> . </div>
        <div class="text-light"> . </div>
        <div class="text-light"> . </div>

        <div class="row mt-6 p-6 ">
            <div class="col-9 pt-6 rounded text-dark text-center"> Group ID      
            </div>
        </div>     
        <div class="row">
            
            <div class=" col-4 container p-1 my-1 text-dark text-center ">
                <div class="form-outline mb-4">
                    <input type="email" class="form-control form-control-sm text-center"
                     placeholder="Enter group ID" />
                    
                </div>
             </div>
        </div>

        <div class="row mt-6 p-6">
            <div class="col-9 mt-6 rounded text-dark text-center">Group Name    
            </div>
        </div>     
        
        <div class="row ">
            
            <div class=" col-4 p-1 container text-dark text-center ">
                <div class="form-outline mb-4">
                    <input type="email" class="form-control form-control-sm text-center"
                     placeholder="Enter group name" />
                    
                </div>
             </div>
        </div>
        
        <div class="row my-1">
            <div class="rounded text-center">
                  <div type="button" class="btn btn-outline-dark my-1">Save</div>
                </div>

        </div>

        
        
    </div>
</template>
<script>
export default {
  name: "Create-group-view",
  components: {},
};
</script>
<style lang="css">
</style>