import { createI18n } from "vue-i18n";
import uz from "../language/uz.json";
import ru from "../language/ru.json";
import en from "../language/en.json";
const locale = localStorage.getItem("locale") || "en";
const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: "en",
  silentFallbackWarn: true,
  globalInjection: true,
  messages: {
    en,
    uz,
    ru,
  },
});
export default i18n;
//# sourceMappingURL=i18n.js.map
