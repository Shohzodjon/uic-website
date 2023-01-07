import { watch } from "vue";
import i18n from "@/plugins/i18n";
import { Locale } from "vue-i18n";

export default function useOnLanguageChange(
  callback: (locale: Locale) => void | Promise<void>
) {
  watch(
    () => i18n.global.locale,
    (newLocale) => {
      callback(newLocale);
    }
  );
}
