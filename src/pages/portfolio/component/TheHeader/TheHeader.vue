<template>
  <header :class="customClassHeaderBg ? customClassHeaderBg : ''">
    <div class="flex items-center justify-between md:gap-[67px] gap-0 !w-full">
      <transition name="hamburger-icon">
        <button
          @click="closeBtn"
          class="text-white inline-flex md:!hidden"
          :class="hamburgerClass ? hamburgerClass : ''"
          aria-label="button"
        >
          <u-icons
            class="py-1.5 px-1.5 bg-[#ffffff29] rounded-[10px]"
            name="hamburger_icon"
          />
        </button>
      </transition>
      <a
        href="https://uic.group"
        target="_blank"
        data-aos="fade-on"
        data-aos-duration="2000"
        :class="customClassIcon ? customClassIcon : ''"
        aria-label="link"
      >
        <u-icons class="!hidden md:!inline-flex" :name="iconName" />
        <u-icons class="!inline-flex md:!hidden" :name="adaptiveIconName" />
      </a>
      <nav
        data-aos="fade-on"
        data-aos-duration="1000"
        :class="borderClass ? borderClass : ''"
        class="md:flex hidden justify-between items-center w-full rounded-2xl py-6 pl-7 pr-3.5"
      >
        <ul
          :class="customCLassNav ? customCLassNav : ''"
          class="flex items-center gap-0 lg:gap-12 md:gap-5"
        >
          <li v-for="(item, index) in headerMenu" :key="index">
            <router-link
              to="#"
              :class="[index === activePage ? customClassPage : customClass]"
              @click="activePage = index"
              class="font-medium !leading-[19px] text-white tracking-[0.03em] uppercase cursor-pointer transition duration-500 ease-in-out md:inline-flex hidden hover:transition hover:duration-500 hover:ease-in-out"
              aria-label="link"
            >
              {{ $t(item.name) }}
            </router-link>
          </li>
        </ul>
        <div
          :class="customMenuLanguage ? customMenuLanguage : ''"
          class="menu__language flex group border-solid py-2 px-3.5 rounded-12 gap-0.5 border"
        >
          <u-icons name="globus" :class="customClassForGlobe" />
          <div>
            <div class="flex">
              <p
                :class="activeLang"
                class="font-medium text-base max-w-0 duration-300 opacity-0 whitespace-nowrap group-hover:mr-[12px] group-hover:!opacity-1 group-hover:max-w-[105px]"
              >
                {{ $t("language") }}
              </p>
              <router-link
                v-for="(item, index) in langs"
                :key="index"
                class="opacity-0 max-w-0 group-hover:mx-[6px] group-hover:opacity-1 group-hover:max-w-[20px]"
                :class="[
                  index === activeItem
                    ? 'active-item font-bold font-base max-w-[20px] opacity-1 relative'
                    : 'font-bold font-base text-[#ffffff66]',
                  customClassLang ? customClassLang : '',
                ]"
                to="#"
                @click="($i18n.locale = item.short), (activeItem = index)"
                aria-label="link"
              >
                {{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
      <!-- adaptive language-menu -->
      <LanguageSelectVue
        class="inline-flex md:hidden"
        :class="
          responsiveLanguageClass
            ? responsiveLanguageClass
            : 'border border-solid border-[#ffffff33]'
        "
        v-bind="{
          title: 'UZ',
          data: {
            results: ['UZ', 'EN', 'RU'],
          },
        }"
        @click="select"
      />
    </div>

    <!-- adaptive styles -->
    <div
      class="z-[100]"
      :class="
        positionMenu
          ? 'fixed top-0 left-0 right-0 bottom-0  bg-[#1e1e20e0] backdrop-blur-lg '
          : 'hidden'
      "
      v-show="positionMenu"
    >
      <button
        @click="closeBtn"
        class="absolute text-white top-6 left-6"
        aria-label="button"
      >
        <u-icons name="close_menu" />
      </button>
      <div
        class="flex items-center justify-center flex-col gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <router-link
          v-for="(item, index) in headerMenu"
          :key="index"
          :to="item.link"
          @click="activePage = index"
          :class="[
            index === activePage ? 'active' : '',
            { customClassPage: '' },
          ]"
          class="font-semibold text-[21px] leading-[25px] tracking-[0.03em] text-white uppercase"
          aria-label="link"
          >{{ item.name }}</router-link
        >
      </div>
      <div
        class="absolute bottom-[70px] left-[50%] translate-x-[-50%] flex items-center justify-center gap-8"
      >
        <a
          v-for="(item, index) in socials"
          :key="index"
          :href="item.link"
          target="_blank"
          class="!text-white"
          aria-label="link"
        >
          <u-icons :name="item.name" />
        </a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import LanguageSelectVue from "@/stories/dropdown/languageSelect/LanguageSelect.vue";
import { reactive, ref } from "vue";
let activeItem = ref(2);
let activePage = ref(0);
let positionMenu = ref(false);

function closeBtn() {
  positionMenu.value = !positionMenu.value;

  if (positionMenu.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

defineProps({
  borderClass: { type: String, default: "" },
  title: { type: String, default: "" },
  iconName: { type: String, default: "" },
  adaptiveIconName: { type: String, default: "" },
  customClassIcon: { type: String, default: "" },
  customClassLang: { type: String, default: "" },
  customClassPage: { type: String, default: "" },
  customMenuLanguage: {
    type: String,
    default: "text-[#ffffff99] border-[#ffffff33]",
  },
  customClassNav: { type: String, default: "" },
  customClassHeaderBg: { type: String, default: "bg-transparent" },
  customClass: { type: String },
  activeItemColor: { type: String },
  responsiveLanguageClass: { type: String, default: "" },
  hamburgerClass: { type: String },
  customClassForGlobe: { type: String },
});

const headerMenu = reactive([
  { name: "header.about", link: "/about" },
  { name: "header.brief", link: "/brief" },
  { name: "header.portfolio", link: "/portfolio" },
  { name: "header.vacancy", link: "/vacancy" },
  { name: "header.blog", link: "/blog" },
]);

const langs = reactive([
  { title: "EN", short: "en" },
  { title: "RU", short: "ru" },
  { title: "UZ", short: "uz" },
]);

const socials = reactive([
  { name: "facebook", link: "https://www.facebook.com/uicgroup.org" },
  { name: "twitter", link: "https://www.twitter/uic.group/" },
  { name: "instagram", link: "https://www.instagram.com/uic.group/" },
  { name: "telegram", link: "https://t.me/uicgroup" },
]);
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
.active-item {
  color: white;
  opacity: 1;
}

.active {
  font-weight: semibold;
  /*color: #ffeb00;*/
  position: relative;
  transition: 0.3 ease-in-out;
}

.hamburger-icon-enter-active {
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
