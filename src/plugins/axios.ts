import axios from "axios";
import i18n from "@/plugins/i18n";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

$axios.interceptors.request.use(
  (config: any) => {
    config.headers["Accept-Language"] = i18n.global.locale.value;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
