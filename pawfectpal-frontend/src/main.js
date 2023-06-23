import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "../router.js";
import store from "./store/index.js";

const app = createApp(App);
app.use(router).use(store);
app.mount("#app");
