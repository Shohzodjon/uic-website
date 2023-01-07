<template>
  <div class="mt-10 bg-[#252527] rounded-[12px] p-5 lg:p-7">
    <p
      data-aos="fade-up"
      data-aos-duration="800"
      class="text-[14px] md:text-[16px] font-extralight md:font-normal leading-[144%] tracking-[0.2px]"
    >
      <span class="text-[#00A795] md:text-[#fff] text-[18px] md:text-[16px]"
        >"UIC Group"</span
      >
      <!--      {{ $t("projects.title.projects.title") }}-->
      {{ $t("about_page.projects.title") }}
    </p>
    <div class="relative">
      <div
        class="mt-[22px] projects-list duration-300"
        :class="showMore ? 'projects-list_active' : ''"
      >
        <!--        TODO: PORTFOLIO BITSA LINK BO'LADI-->
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          v-for="(item, index) in cards"
          :key="index"
          class="relative group project-item"
        >
          <div
            class="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
          >
            <span class="min-w-[120px] flex-center">
              <img
                :src="`/uic-images/about/portfolio/${item.icon}.svg`"
                alt="company logo"
                class="m-auto"
              />
            </span>
            <p class="pb-3 pt-5 md:pb-5 about_text">
              {{ $t(item.text) }}
            </p>
          </div>
          <!--          TODO: PORTFOLIO BITSA TRUE BO'LADI-->
          <div
            v-if="false"
            class="w-[100%] h-full static md:absolute right-0 top-0 pb-5 md:pb-0 flex items-center md:justify-end project-item__gradient md:opacity-0 group-hover:opacity-100 transition-all duration-300 border-b-[1px] border-b-solid border-b-[#FFFFFF1F]"
          >
            <!--            border-b-[1px] border-b-solid border-b-[#FFFFFF1F]-->
            <span
              class="text-[13px] font-bold leading-[16px] flex items-center gap-3"
              >{{ $t("more") }} <u-icons name="arrow_right_small"
            /></span>
          </div>
        </div>
      </div>
      <div
        v-if="false"
        class="absolute w-[100%] h-[112px] bottom-0 project-list__gradient"
        :class="showMore ? 'hidden' : ''"
      />
    </div>

    <div class="flex justify-center mt-4">
      <dark-button
        data-aos="fade-up"
        data-aos-duration="800"
        @click="showMore = !showMore"
        v-bind="{
          title: 'header.portfolio',
          btnIcon: 'arrow_gray',
          moreIcon: true,
          link: '/portfolio',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import DarkButton from "@/stories/SButtons/DButton/DarkButton.vue";
const showMore = ref(false);
const cards = [
  {
    icon: "about-safenetpay",
    text: "about_page.projects.safennetpay",
    link: "",
  },
  {
    icon: "about-prosm",
    text: "about_page.projects.proSm",
    link: "",
  },
  {
    icon: "about-express24",
    text: "about_page.projects.express",
    link: "",
  },
  {
    icon: "about-tdiu",
    text: "about_page.projects.tdiu",
    link: "",
  },
  {
    icon: "about-vilz",
    text: "about_page.projects.vilz",
    link: "",
  },
  {
    icon: "about-ayoluchun",
    text: "about_page.projects.ayol_uchun",
    link: "",
  },
  // {
  //   icon: "super1000",
  //   text: "about_page.projects.super_1000",
  //   link: "",
  // },
  // {
  //   icon: "asaxiy",
  //   text: "about_page.projects.asaxiy",
  //   link: "",
  // },
  // {
  //   icon: "asakabank",
  //   text: "about_page.projects.asakabank",
  //   link: "",
  // },
  // {
  //   icon: "avloniy",
  //   text: "about_page.projects.avloniy",
  //   link: "",
  // },
  // {
  //   icon: "ricomel",
  //   text: "about_page.projects.ricomel",
  //   link: "",
  // },
  // {
  //   icon: "nomakler",
  //   text: "about_page.projects.nomakler",
  //   link: "",
  // },
  // {
  //   icon: "uc",
  //   text: "about_page.projects.uc",
  //   link: "",
  // },
  // {
  //   icon: "joyda",
  //   text: "about_page.projects.joyda",
  //   link: "",
  // },
  // {
  //   icon: "mening_konstitutsiyam",
  //   text: "about_page.projects.mening_konstitutsiyam",
  //   link: "",
  // },
];
</script>

<style scoped>
/*.projects-list {*/
/*  max-height: 768px;*/
/*  transition: max-height 0.15s ease-out;*/
/*  overflow: hidden;*/
/*}*/
/*.projects-list_active {*/
/*  max-height: 100000px;*/
/*  transition: max-height 0.3s ease-in;*/
/*}*/
.project-item p {
  border-bottom: 1px solid #ffffff1f;
}
.project-item:last-child p {
  border-bottom: none;
}
.project-item__gradient {
  background: linear-gradient(270deg, #252527 0%, rgba(37, 37, 39, 0) 100%);
}
/*.project-list__gradient {*/
/*  background: linear-gradient(180deg, rgba(37, 37, 39, 0) 0%, #252527 100%);*/
/*}*/
.project-item:last-child .project-item__gradient {
  border-bottom: none;
}
@media (max-width: 768px) {
  .project-item {
    border-bottom: 1px solid #ffffff1f;
  }
  .project-item p {
    border-bottom: none;
  }
}
</style>
