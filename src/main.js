import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueLazyLoad from "vue3-lazyload";
import i18n from './localization/i18n'

createApp(App).use(i18n).use(router).use(store).use(VueLazyLoad).mount("#app");
