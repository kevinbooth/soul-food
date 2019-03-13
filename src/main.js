import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//Assets
import "./assets/styles/skeleton.css";
import "./assets/styles/normalize.css";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
