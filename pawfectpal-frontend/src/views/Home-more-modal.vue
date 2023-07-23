<template lang="html">  

    <!-- Modal -->
    <div v-if="OpenClose" class="modal show" tabindex="-1" style="display:block">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                <p class="modal-title text-body" id="homeMoreLabel">sbahujidbasuidbuiasbui</p>
                <button type="button" class="btn-close" @click="OpenCloseFun()" aria-label="Close"></button>
                </div>
                <div class="modal-body text-body">
                hello
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn-outline-light btn-sm py-0 px-1" @click="OpenCloseFun()">
        more
    </button>
</template>
<script>
export default {
    name: "HomeMore",
    props: {
        visibile: Boolean,
        variant: String,
    },
    data(){
        return{
            OpenClose: this.visible
        }
    },
    methods:{
        OpenCloseFun(){
            this.OpenClose = !this.OpenClose;
        }
    },
    watch:{
        visible: function(newVal, oldVal){
            this.OpenClose = newVal
            console.log('new' + newVal + '==' + oldVal)
        }
    }
}
</script>