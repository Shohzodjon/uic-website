<template>
  <div class="meeting-youth">
    <h4
      class="about__title mt-10 mb-3"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t("about_page.meeting_youth_title") }}
    </h4>
    <p class="about_text mb-5" data-aos="fade-up" data-aos-duration="850">
      {{ $t("about_page.meeting_youth_decs") }}
    </p>
    <div>
      <a
        data-aos="fade-left"
        data-aos-duration="800"
        :href="item.link"
        target="_blank"
        v-for="(item, index) in cards"
        :key="index"
        class="meeting-youth__card p-4 md:p-5 md:pl-6 flex items-center justify-between relative border-[#FFFFFF33] border-[1px] rounded-[12px] mb-5 last:mb-0 hover:bg-[#242426] duration-300 group"
      >
        <span
          class="absolute left-0 w-[4px] h-[30px] bg-[#FFFFFF1F] rounded-[4px] group-hover:bg-[#00A795] duration-300"
        />
        <div class="flex items-center gap-2">
          <u-icons name="location_gray" />
          <p
            class="text-[14px] smtext-[16px] md:text-[20px] font-semibold leading-[130%]"
          >
            {{ $t(item.text) }}
          </p>
        </div>
        <u-icons
          name="arrow_right"
          class="meeting-youth__icon duration-300 ml-4"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
const cards = [
  {
    text: "about_page.meeting_youth_card1",
    link: "https://t.me/uicgroup/203",
  },
  {
    text: "about_page.meeting_youth_card2",
    link: "https://t.me/uicgroup/265",
  },
  {
    text: "about_page.meeting_youth_card3",
    link: "https://t.me/uicgroup/257",
  },
];
</script>

<style>
.meeting-youth__icon svg rect {
  transition: 0.3s ease-in-out;
}
.meeting-youth__card:hover .meeting-youth__icon svg rect {
  fill: #00a795 !important;
  fill-opacity: 1;
}
</style>
