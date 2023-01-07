import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.css";
import definePlugins from "@/plugins";
import { createPinia } from "pinia";
import axios from "./plugins/axios";
import VueAxios from "vue-axios";
import router from "@/router";
import VueLazyLoad from "vue3-lazyload";
import { fpjsPlugin } from "@fingerprintjs/fingerprintjs-pro-vue-v3";
const pinia = createPinia();
const app = createApp(App);
// console.log("sitemapMiddleware", sitemapMiddleware);

app.use(pinia);
app.use(VueAxios, axios);
app.use(router);
app.use(VueLazyLoad);
app.use(fpjsPlugin, {
  loadOptions: {
    apiKey: "KW2MD4MwqlLyxUXIRmmD",
    region: "ap",
  },
});
definePlugins(app);
app.mount("#app");
