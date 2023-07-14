<template lang="html">
    <div class="container mt-4">
        <div class="row">
            <p id="font-dark-green"  class="display-2 fs-1 text-center">New Task</p>
        </div>
        <div id="green-banner"  class="row mx-1 rounded-top">
            <div class="col-auto align-self-start p-0">
                <div class="mb-1 pb-2 ps-3 float-end">
                    <button type="button" class="btn btn-sm mt-2 py-1 px-2 text-light">Cancel</button>
                </div>
            </div>
            <div class="col align-self-end p-0">
                <div class="mb-1 pb-2 pe-3 float-end">
                    <button type="button" class="btn btn-sm rounded-pill btn-outline-light mt-2 py-1 px-2">Add</button>
                </div>
            </div>
        </div> 
        <div  id="green-banner"  class="row mx-1 mb-2 pb-2 rounded-bottom ">
            <div class="input-group">
                <input type="text" class="form-control rounded-bottom-0" id="taskTitle" placeholder="Title">
            </div>
            <div class="mb-3">
                <textarea class="form-control rounded-top-0 border-top-0" id="taskNotes" placeholder="Notes" rows="3"></textarea>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text pe-4"><img src="../assets/Cat.svg" alt="" class="pe-2">Pet &nbsp;&nbsp;</label>
                <select class="form-select" id="taskPet">
                    <option selected>--</option>
                    <option value="Leo">Leo</option>
                    <option value="Milo">Milo</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text"><img src="../assets/people.svg" alt="" class="pe-2">People</label>
                <select class="form-select" id="taskMember">
                    <option selected>--</option>
                    <option value="Eaint">Eaint</option>
                    <option value="Justin">Justin</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" id="taskDate" placeholder="Date">
                <input type="text" class="form-control input-space" id="taskTime" placeholder="Time">
            </div>
            <div class="ms-3 p-0 px-1 form-check form-switch">
                <label class="form-check-label" for="taskCalendar">To be shown on calendar</label>
                <input class="form-check-input float-end me-4" type="checkbox" role="switch" id="taskCalendar">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Task-view",
    components: {},
}
</script>
<style lang="css">
    
</style>