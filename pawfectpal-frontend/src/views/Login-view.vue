<template lang="html">
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4 m-auto rounded-top bg-white">
          <h2 class="text-center pt-3 mb-4">Login</h2>

          <form action="#" @submit.prevent="login">
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
              <input type="email" class="form-control" placeholder="Email" v-model="login_form.email" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"><i class="fa fa-user"></i></span>
              <input type="password" class="form-control" placeholder="Password" v-model="login_form.password"/>
            </div>

            <div class="d-grid">
              <button type="submit" id="green-banner" class="btn">Login</button>
              <p class="text-center">
                Don't have an account?
                <a href="" @click="goToSignUp">Sign up now</a>
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
  name: "Login-view",
  components: {},
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
  },
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
        store.dispatch('login', login_form.value);
    }

    
    return {
        login_form,
        login
    }
  },
};
</script>
<style lang="css"></style>
