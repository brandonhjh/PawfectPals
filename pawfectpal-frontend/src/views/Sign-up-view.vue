<template lang="html">
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4 m-auto rounded-top bg-white wrapper">
          <h2 class="text-center pt-3">Sign up Here</h2>
          <p class="text-center text-muted lead">Cant wait to have you!</p>
          <!-- form start -->
          <form @submit.prevent="register">
            <!-- <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
              <input
                type="text"
                class="form-control"
                placeholder="Fullname"
              />
            </div> -->
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa fa-envelope"></i
              ></span>
              <input type="email" class="form-control" placeholder="Email" v-model="signup_form.email" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa fa-envelope"></i
              ></span>
              <input type="password" class="form-control" placeholder="Password" v-model="signup_form.password"/>
            </div>
            <!-- <div class="input-group mb-3">
              <span class="input-group-text"
                ><i class="fa fa-envelope"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div> -->

            <div class="d-grid">
              <button type="submit" class="btn " id="green-banner">Sign Up</button>
              <p class="text-center text-muted mt-2">
                By registering you are agreeing to let PawfectPals use your data
                for our service
              </p>

              <p class="text-center">
                Already have an Account?
                <a href="" @click="goToLogin">Login Here</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Sign-up-view",
  components: {},

  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
  setup () {
    const signup_form = ref({});
    const store = useStore();

    const register = () => {
        store.dispatch('register', signup_form.value);
    }
    return {
        signup_form,
        register
    }
  }
};
</script>
<style lang="css"></style>
