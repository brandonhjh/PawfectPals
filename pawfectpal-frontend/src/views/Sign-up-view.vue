<template lang="html">
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-lg-4 m-auto rounded-top bg-white wrapper">
                    <h2 class="text-center pt-3">Sign up Here</h2>
                    <p class="text-center text-muted lead">Cant wait to have you!</p>
                    <!-- form start -->
                    <form action="#">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="First Name"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="Last Name"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                            <input type="text" class="form-control" placeholder="Email"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                            <input type="text" class="form-control" placeholder="Confirm Password"/>
                        </div>

                        <div class="d-grid">
                            <button type="button" class="btn btn-success">Sign Up</button>
                            <p class="text-center text-muted mt-2">By registering you are agreeing to let PawfectPals use your data for our service</p>

                            <p class="text-center">
                                Already have an Account? <a href="" @click="goToLogin">Login Here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Sign-up-view",
    components: {},

    methods: {
        goToLogin() {
            this.$router.push('/login');
        },
    }
};
</script>
<style lang="css">
</style>