import { computed } from "vue";

export function useDomainVariables() {
  const isUsDomain = import.meta.env.VITE_APP_DOMAIN == "us";

  const phoneNumber = computed(() => {
    return isUsDomain ? "+1 331 481-1908" : "+998 71 200 70 07";
  });

  const address = computed(() => {
    return isUsDomain ? "address_us" : "address_uz";
  });

  const email = computed(() => {
    return isUsDomain ? "info@uicgroup.us" : "info@uic.group";
  });

  const url = computed(() => {
    return isUsDomain ? "https://uicgroup.us" : "https://uic.group";
  });

  const map = computed(() => {
    return isUsDomain
        ? "https://goo.gl/maps/q9Jvx6VCU1GxkN1c7"
        : "https://yandex.com/maps/-/CCU4ELbzSD";
  });

  return {
    isUsDomain,
    phoneNumber,
    address,
    email,
    map,
    url,
  };
}
