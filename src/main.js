import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import vuetify from "./plugins/vuetify";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHatWizard);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
0;
