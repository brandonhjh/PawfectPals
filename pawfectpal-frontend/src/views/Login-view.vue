<template lang="html">
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-4 m-auto rounded-top bg-white">
                    <h2 class="text-center pt-3 mb-4">Login</h2>

                <form action="#">
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control" placeholder="Password"/>
                    </div>

                    <div class="d-grid">
                        <button type="button" class="btn btn-success">Login</button>
                        <p class="text-center">Don't have an account? <a href="" @click="goToSignUp">Sign up now</a></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Login-view",
    components: {},
    methods: {
        goToSignUp() {
            this.$router.push('/signup');
        },
    }
}
</script>
<style lang="css">
    
</style>