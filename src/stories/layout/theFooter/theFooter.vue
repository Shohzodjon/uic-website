<template>
  <div
    class="bg-[#1E1E20] w-full h-full pt-[30px] md:pt-10 xs:pb-0 relative z-1 pb-[18px]"
  >
    <footer class="container">
      <div class="justify-center items-center pb-7 hidden lg:!hidden xs:flex">
        <a
          class="bottom-footer__logo"
          :href="url"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="link"
        >
          <u-icons class="text-white" name="uic_logo" />
        </a>
      </div>
      <div
        class="flex justify-center sm:justify-center md:justify-center lg:!justify-between"
      >
        <ul
          class="flex gap-x-5 lg:!gap-x-12 items-center lg:!justify-start justify-center flex-wrap"
        >
          <li v-for="(item, index) in data" :key="index">
            <router-link
              :to="item.links"
              class="cursor-pointer text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out text-base uppercase xs:text-[13px] font-semibold lg:!text-base"
              @click="scrollToTop"
              >{{ $t(item?.link || "") }}
            </router-link>
          </li>
        </ul>
        <div class="hidden lg:!flex group cursor-pointer">
          <div
            class="border-[1px] group-hover:border-[#00A795] transition duration-300 ease-in-out flex items-center justify-center w-12 h-12 rounded-[50%]"
            @click="scrollToTop"
          >
            <u-icons
              class="text-[#FFFFFF99] group-hover:!text-[#00A795] transition duration-300 ease-in-out"
              name="arrow_up"
            />
          </div>
        </div>
      </div>
      <div
        class="flex justify-center lg:!justify-start lg:!items-center mb-5 md:mb-10 lg:mb-[50px]"
      >
        <div
          class="flex flex-col pt-[12px] sm:flex-row xs:items-center lg:items-center gap-x-8 sm:gap-y-0 gap-y-4"
        >
          <div class="flex !items-center xs:justify-center gap-x-3 xs:mb-0">
            <span v-for="item in icon" :key="item">
              <a
                :href="item.Iconlink"
                class="text-white"
                target="_blank"
                aria-label="link"
              >
                <u-icons
                  :name="item.icons"
                  class="hover:bg-[#00A795] hover:border-[#00A795] hover:rounded-[50%] sm:border-[1px] sm:border-solid sm:rounded-[50%] flex justify-center items-center w-6 h-6 transition duration-300 ease-in-out"
                />
              </a>
            </span>
          </div>
          <div
            class="flex flex-col gap-y-2 xs:flex-row justify-center xs:gap-x-4 xs:pt-6 sm:!pt-0 lg:!pt-0 lg:!items-center"
          >
            <div
              class="flex gap-x-1 sm:!gap-x-3 items-center xs:justify-center"
            >
              <u-icons class="text-white" name="email" />
              <a
                :href="`mailto:${email}`"
                class="text-base text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out xs:text-[15px] lg:!text-[16px] xs:leading-[18px] font-normal"
                target="_blank"
                aria-label="link"
                >{{ email }}</a
              >
            </div>
            <div
              class="flex items-center xs:justify-center sm:!gap-x-3 xs:gap-x-1"
            >
              <u-icons class="text-white" name="tel" />
              <a
                :href="`tel:${phoneNumber}`"
                class="text-base text-[#FFFFFF99] hover:text-white transition duration-300 ease-in-out font-normal xs:text-[15px] lg:!text-[16px] xs:leading-[18px] lg:!w-[132px] xs:w-[124px]"
                target="_blank"
                aria-label="link"
                >{{ phoneNumber }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <hr class="text-[#FFFFFF] opacity-[0.1]" />
      <div
        class="mt-[18px] flex flex-col-reverse h-auto md:flex-row items-center md:justify-between"
      >
        <div class="mt-4 sm:!mb-9 mb-[28px]">
          <h2
            class="text-[#FFFFFF] opacity-[0.6] text-base font-medium xs:text-[13px] sm:!text-base"
          >
            © <span>{{ new Date().getFullYear() }}</span>
            UIC GROUP
          </h2>
        </div>
        <div class="hidden lg:block mb-[16px] -mr-[30%]">
          <a
            class="md:gap-[8px] flex items-center justify-center lg:!flex text-center uic"
            :href="url"
            target="_blank"
            aria-label="link"
          >
            <u-icons class="uicLogo text-white opacity-[0.8]" name="uic_logo" />
            <u-icons
              class="uicIcon text-white opacity-[0.8] md:opacity-0"
              name="uic_name"
            />
          </a>
        </div>
        <div class="w-full md:!w-auto">
          <a
            class="group flex items-center justify-between border-[1px] border-solid transition duration-300 ease-in-out hover:border-[#00A795] border-[#FFFFFF33] rounded-12 mb-[16px] py-1 xs:py-0"
            :href="map"
            target="_blank"
            aria-label="link"
          >
            <div class="flex items-center pl-3">
              <u-icons
                class="text-[#FFFFFF99] sm:mr-[10px] mr-0 lg:!ml-[19.5px] lg:!mr-[11.5px]"
                name="footer_map"
              />
              <h3
                class="text-[#FFFFFF] flex-wrap text-base font-medium opacity-[0.6] text-[13px] lg:!text-[16px] leading-[19px]"
              >
                {{ $t(address || "") }}
              </h3>
            </div>

            <div
              class="whitespace-nowrap lg:!px-2.5 px-2 sm:px-2 xs:py-2 lg:!pt-[3px] lg:!pb-[6px] font-normal group-hover:bg-[#00A795] transition duration-300 ease-in-out bg-[#FFFFFF29] text-white rounded-6 lg:!text-[16px] xs:mb-[6px] xs:ml-[14px] xs:my-[6px] ml-[14px] mr-[6px] xs:text-[13px]"
            >
              {{ $t("in_map") }}
            </div>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { useDomainVariables } from "@/composables/useDomainVariables";

export interface Props {
  link?: string;
  links?: string;
  tel?: string;
  map?: string;
  map_link?: string;
  data?: Array<object>;
  icon?: Array<object>;
  address?: string;
}

const { phoneNumber, email, url, map, address } = useDomainVariables();

const scrollToTop = () => {
  setTimeout(() => window.scrollTo(0, 0), 800);
};

const data = [
  {
    link: "header.about",
    links: "/about",
  },
  {
    link: "header.brief",
    links: "/brief",
  },
  {
    link: "header.portfolio",
    links: "/portfolio",
  },
  {
    link: "header.vacancy",
    links: "/vacancy",
  },
  {
    link: "header.blog",
    links: "/blog",
  },
];
const icon = [
  {
    icons: "facebook",
    Iconlink: "https://www.facebook.com/uicgroup.org",
  },
  {
    icons: "twitter",
    Iconlink: "https://twitter.com/UIC_Group",
  },
  {
    icons: "instagram",
    Iconlink: "https://www.instagram.com/uic.group",
  },
  {
    icons: "telegram",
    Iconlink: "https://t.me/uicgroup",
  },
];
withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.footer-bottom {
  width: max-content;
}

.uiclogo:hover {
  transform: translateX(-20px);
}

.uic .uicLogo:hover ~ .uicIcon {
  transform: translateX(0);
  z-index: 1;
  opacity: 1;
}

.uic .uicIcon {
  transition: 0.3s ease-in-out;
  transform: translateX(20%);
}
</style>
