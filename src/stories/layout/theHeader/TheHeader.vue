<template>
  <header
    ref="header"
    class="duration-300 transition-all header w-screen right-0 z-[100] sticky top-[0px] bg-[#1E1E20] bg-opacity-80"
  >
    <div
      :class="scrollPosition ? 'pt-[24px] pb-2' : 'py-[15px]'"
      class="container flex items-center justify-between transition-all duration-300"
    >
      <!--      scroll:{{ scrollPosition }}-->
      <transition name="closeBtn">
        <button
          class="text-white inline-flex lg:!hidden"
          @click="closeBtn"
          aria-label="button"
        >
          <u-icons
            class="py-1.5 px-1.5 bg-[#ffffff29] rounded-[10px]"
            name="hamburger_icon"
          />
        </button>
      </transition>
      <router-link
        data-aos="fade-on"
        data-aos-duration="2000"
        to="/"
        class="flex items-center justify-center"
        aria-label="link"
      >
        <u-icons
          class="!inline-flex md:!hidden text-[#fff] logo_text"
          name="header_small_logo"
        />
        <u-icons
          v-if="scrollPosition"
          class="!hidden md:!inline-flex text-[#fff] logo_text"
          name="logo_big_white"
        />
        <u-icons
          v-else
          class="text-white logo_fixed !hidden md:!inline-flex"
          name="logo_fixed"
        />
      </router-link>
      <nav>
        <div
          class="flex flex-row-reverse items-center md:gap-x-12"
          data-aos="fade-on"
          data-aos-duration="1000"
        >
          <div
            class="menu__language group cursor-pointer hidden lg:flex items-center gap-[1px] duration-200 w-auto h-[38px] border-[1px] border-solid border-[#FFFFFF33] rounded-[12px] px-[11px] overflow-hidden"
          >
            <u-icons class="text-[#fff]" name="globus" />
            <p
              class="transition-all font-medium font-[16px] text-[FFFFFF66] duration-300 max-w-0 opacity-0 whitespace-nowrap text-[#ffffff66] group-hover:mr-[12px] group-hover:!opacity-1 group-hover:max-w-[105px]"
            >
              {{ $t("header.choose_lang") }}
            </p>
            <router-link
              v-for="(item, index) in langs"
              :key="index"
              :class="[
                activeItem.short === item.short
                  ? '1 active-item font-bold font-base max-w-[20px] !opacity-1 relative text-[#fff]'
                  : '2 opacity-0 font-bold font-base text-[#ffffff66]',
                customClassLang ? customClassPage : '',
              ]"
              to="#"
              class="max-w-0 font-[16px] font-bold text-[FFFFFF66] hover:text-white group-hover:mx-[6px] group-hover:opacity-1 group-hover:max-w-[20px] transition-all duration-300"
              @click="changeLanguage(item)"
              aria-label="link"
            >
              {{ item.title }}
            </router-link>
          </div>
          <!-- adaptive language-menu -->
          <ul
            :class="customCLassNav"
            class="items-center hidden gap-0 duration-300 menu__body lg:flex md:gap-5 lg:gap-6 xl:gap-12 translate-y-[3px]"
          >
            <li v-for="(item, index) in headerMenu" :key="index">
              <router-link
                :class="[
                  index === activePage ? 'active' : '',
                  { customClassPage: '' },
                ]"
                :to="item.link"
                class="font-medium text-sm lg:text-base !leading-[19px] tracking-[0.03em] uppercase text-[#ffffff99] cursor-pointer transition duration-500 ease-in-out hover:text-[#FFFFFF] lg:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
                @click="activePage = index"
                aria-label="link"
              >
                {{ $t(item.name) }}
              </router-link>
            </li>
            <li v-if="mainPage">
              <a
                class="text-[18px] xl:text-[24px] font-bold text-[#9AAFB2] border-bottom hover:text-white duration-300"
                :href="`tel: ${phoneNumber}`"
                aria-label="link"
              >
                {{ isUsDomain ? $t("phone_us1") : $t("header_tel1") }}
                <span class="ml-2 text-white">
                  {{ isUsDomain ? $t("phone_us2") : $t("header_tel2") }}
                </span>
              </a>
            </li>
          </ul>
          <LanguageSelect
            :class="
              responsiveLanguageClass
                ? responsiveLanguageClass
                : 'border border-solid border-[#ffffff33]'
            "
            class="inline-flex lg:hidden"
            v-bind="{
              title: activeItem.short,
              data: {
                results: langs.filter((el) => el.short !== activeItem.short),
              },
            }"
            @click:title="changeLanguage"
          />
        </div>
      </nav>
      <div
        :class="
          positionMenu ? 'translate-x-[0%]' : 'translate-x-[-100%] scale-75'
        "
        class="fixed top-0 left-0 right-0 bottom-0 duration-300 bg-[#1e1e20e0] backdrop-blur-2xl w-full h-[100vh] overflow-hidden"
      >
        <button
          class="text-white absolute top-[26px] left-[10px]"
          @click="closeBtn"
          aria-label="button"
        >
          <u-icons name="close_menu" />
        </button>
        <div
          class="burger-menu flex items-center justify-center flex-col gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <router-link
            v-for="(item, index) in headerMenu"
            :key="index"
            :class="[
              index === activePage ? 'active' : '',
              { customClassPage: '' },
            ]"
            :to="item.link"
            class="font-semibold text-[21px] leading-[25px] tracking-[0.03em] text-white uppercase"
            @click="(activePage = index), (positionMenu = false)"
            aria-label="link"
          >
            {{ $t(item?.name || "") }}
            <!-- {{ item.name}} -->
          </router-link>
        </div>
        <div
          class="absolute bottom-[100px] left-[50%] translate-x-[-50%] flex items-center justify-center gap-8"
          @click="positionMenu = false"
        >
          <a
            v-for="(item, index) in socialNetworks"
            :key="index"
            :href="item.link"
            class="text-white"
            target="_blank"
            aria-label="link"
          >
            <u-icons :name="item.name" class="scale-150" />
          </a>
        </div>
        <a
          :href="phoneNumber"
          class="absolute bottom-6 flex items-center gap-1 font-bold text-[18px] left-[50%] translate-x-[-50%]"
          @click="positionMenu = false"
          target="_blank"
          aria-label="link"
          ><span class="text-[#ffffff94]">{{ phoneNumber }} </span>
        </a>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import LanguageSelect from "@/stories/dropdown/languageSelect/LanguageSelect.vue";
import headerMenu from "@/stories/layout/theHeader/data/Menu";
import { socialNetworks } from "@/config";
import { ref, watch, onMounted } from "vue";
import { useDomainVariables } from "@/composables/useDomainVariables";

export interface Props {
  title?: string;
  iconName?: string;
  adaptiveIconName?: string;
  customClassIcon?: string;
  customClassLang?: string;
  customClassPage?: string;
  customClassNav?: string;
  mainPage?: boolean;
  scrollPosition?: any;
}

const { phoneNumber, isUsDomain } = useDomainVariables();

let locale = localStorage.getItem("locale");
let activeItem = ref({
  title: locale?.toUpperCase(),
  short: locale,
});
onMounted(() => {
  if (!locale) {
    if (import.meta.env.VITE_APP_LANGUAGE) {
      activeItem.value.short = import.meta.env.VITE_APP_LANGUAGE;
    } else activeItem.value.short = "en";
  }
});
function changeLanguage(i: { title: string; short: string }) {
  if (activeItem.value.short !== i.short) {
    localStorage.setItem("locale", i.short);
    window.location.reload();
  }
}
let activePage = ref(0);
let positionMenu = ref(false);
const header = ref(null);
watch(positionMenu, (currentValue) => {
  if (currentValue) {
    document.body.classList.toggle("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
function closeBtn() {
  positionMenu.value = !positionMenu.value;
}
let languages = [
  { title: "EN", short: "en" },
  { title: "RU", short: "ru" },
  { title: "UZ", short: "uz" },
];
const langs = isUsDomain
  ? languages.filter((el) => el.short !== "uz")
  : languages;

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.menu__language:hover + .menu__body {
  opacity: 0;
  margin-left: -200px;
}
.menu__language:hover p {
  opacity: 1;
}
.menu__language:hover a {
  opacity: 1;
}
ul .router-link-exact-active {
  font-weight: semibold;
  color: #00a795;
  position: relative;
  transition: 0.3 ease-in-out;
}
ul .router-link-exact-active:after {
  position: absolute;
  bottom: -8px;
  left: 50%;
  content: "";
  width: 32px;
  height: 2px;
  background-color: #ffffff;
  opacity: 0.2;
  animation: active-page 0.4s ease-out;
  transform: translateX(-50%);
  transition: 0.3 ease-in-out;
}
.burger-menu .router-link-exact-active {
  position: relative;
  color: #00a795;
}
.burger-menu .router-link-exact-active:after {
  position: absolute;
  bottom: -8px;
  left: 50%;
  content: "";
  width: 32px;
  height: 2px;
  background-color: #ffffff;
  opacity: 0.2;
  animation: active-page 0.4s ease-out;
  transform: translateX(-50%);
  transition: 0.3 ease-in-out;
}
.closeBtn-enter-active {
  animation: close 0.4s ease-out;
}
@keyframes active-page {
  0% {
    transition: 5s ease-in-out;
  }
  100% {
    transition: 5s ease-in-out;
  }
}
@keyframes close {
  0% {
    transition: 0.3 ease-in-out;
    transform: translateX(-60px);
  }
  100% {
    transition: 0.3 ease-in-out;
    transform: translateX(0);
  }
}
/* ==== */
.lang-anim-enter-active {
  animation: lang 0.4s ease-out;
}
@keyframes lang {
  0% {
    transform: translateX(10px);
    transition: 0.3 ease-in-out;
  }
  100% {
    transform: translateX(0);
    transition: 0.3 ease-in-out;
  }
}
</style>
