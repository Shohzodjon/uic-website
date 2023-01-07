<template>
  <div>
    <h4 class="about__title" data-aos="fade-up" data-aos-duration="800">
      {{ $t("about_page.child.title") }}:
    </h4>
    <div class="grid gap-4 mt-4 grid-cols-1s sm:grid-cols-2 md:grid-cols-3">
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        v-for="(item, index) in cards"
        :key="index"
        class="bg-[#252527] p-4 md:p-6 rounded-[12px] flex flex-col items-center md:justify-end h-[255px] relative group"
      >
        <span
          class="block absolute top-0 w-[80px] h-[4px] bg-[#FFFFFF1F] rounded-[4px] group-hover:bg-[#00A795] duration-300"
        />
        <img
          :src="`/uic-images/about/projects/${item.img}.svg`"
          :alt="item.name"
          class="mb-[32px]"
        />
        <p class="about_text line-clamp-5">{{ $t(item.text) }}</p>
        <a
          :href="item.link"
          target="_blank"
          class="card-gradient rounded-[12px] absolute bottom-0 w-[100%] h-[139px] flex items-center justify-end flex-col md:scale-0 md:translate-y-[50%] group-hover:scale-100 group-hover:translate-y-[0%] duration-300"
        >
          <div
            class="bg-[#00A795] p-[10px] rounded-[8px] text-[13px] font-bold leading-[16px] mb-5 flex items-center gap-3 group"
          >
            <p>{{ $t("view_more") }}</p>
            <u-icons name="circle_arrow_gray" class="w-[16px] h-[16px]" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
const cards = [
  {
    name: "UIC games",
    img: "project-uic-games",
    link: "https://www.instagram.com/uicgames/",
    text: "about_page.child.card1",
  },
  {
    name: "Lenta",
    img: "project-lenta",
    link: "https://www.instagram.com/foydalilenta/",
    text: "about_page.child.card2",
  },
  {
    name: "job hunt",
    img: "project-jobhunt",
    link: "https://www.instagram.com/jobhuntuz/",
    text: "about_page.child.card3",
  },
  {
    name: "aurora",
    img: "project-aurora",
    link: "https://www.instagram.com/auroraentertainment_org/",
    text: "about_page.child.card4",
  },
  {
    name: "atlassian",
    img: "project-atlassian",
    link: "https://www.instagram.com/atlassian/",
    text: "about_page.child.card5",
  },
];
</script>

<style scoped>
.card-gradient {
  background: linear-gradient(180deg, rgba(37, 37, 39, 0) 0%, #252527 100%);
}
</style>
