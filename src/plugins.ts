import { App } from "vue";
import i18n from "@/plugins/i18n";
import formatDate from "@/plugins/global";
import VueSocialSharing from "@/plugins/vue-social-sharing";
import useVuelidate from "@vuelidate/core";
import VueEasyLightbox from "vue-easy-lightbox";
import VueMask from "@devindex/vue-mask";
import AOS from "aos";
import "aos/dist/aos.css";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

export default function definePlugins(app: App): App {
  app.use(useVuelidate);
  app.use(i18n as any);
  app.use(VueTelInput);
  app.use(VueSocialSharing);
  app.mixin({ methods: { formatDate } });
  app.AOS = new AOS.init({ once: true });
  app.use(VueEasyLightbox);
  app.use(VueMask);

  return app;
}
