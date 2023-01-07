import { createI18n } from "vue-i18n";
import uz from "../language/uz.json";
import ru from "../language/ru.json";
import en from "../language/en.json";
const locale =
  localStorage.getItem("locale") || import.meta.env.VITE_APP_LANGUAGE;

const i18n = createI18n({
  locale,
  silentFallbackWarn: true,
  fallbackLocale: "uz",
  // strategy: "prefix",
  globalInjection: true,
  messages: {
    en,
    uz,
    ru,
  },
});
export default i18n;
