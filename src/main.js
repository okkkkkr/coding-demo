import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./utils/mixins";
import "./utils/element";
import "./styles/index.less";

Vue.mixin(mixins);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
