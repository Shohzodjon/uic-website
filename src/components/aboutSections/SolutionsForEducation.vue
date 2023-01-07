<template>
  <div class="mt-10">
    <p class="about_text mb-10" data-aos="fade-up" data-aos-duration="700">
      {{ $t("about_page.cards2.title") }}
    </p>
    <!--    1 LIST-->
    <h4 class="about__title mb-4" data-aos="fade-up" data-aos-duration="800">
      {{ $t("about_page.cards2.title1") }}:
    </h4>
    <div class="flex flex-col sm:gap-5 gap-7">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        v-for="(item, index) in cards1"
        :key="index"
        class="flex sm:items-center sm:gap-5 gap-2"
      >
        <u-icons :name="item.icon" />
        <p class="about_text">
          {{ $t(item.text) }}
        </p>
      </div>
    </div>
    <!--    2 LIST-->
    <h4
      class="about__title mb-4 mt-10"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t("about_page.cards2.title2") }}:
    </h4>
    <div class="flex flex-col sm:gap-5 gap-7">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        v-for="(item, index) in cards2"
        :key="index"
        class="flex sm:items-center sm:gap-5 gap-2"
      >
        <u-icons :name="item.icon" />
        <p class="about_text">
          {{ $t(item.text) }}
        </p>
      </div>
    </div>
    <!--    3 LIST-->
    <h4
      class="about__title mt-10 mb-5 md:mb-10"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t("about_page.cards2.title3") }}:
    </h4>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-[18px]"
    >
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        v-for="(item, index) in cards3"
        :key="index"
        class="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center"
      >
        <span
          class="h-[25px] md:h-[35px] md:h-[46px] w-[4px] bg-[#FFFFFF1F] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]"
        />
        <p class="about_text">
          {{ $t(item) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
const cards1 = [
  {
    icon: "check_green",
    text: "about_page.cards2.card1",
  },
  {
    icon: "calculator_green",
    text: "about_page.cards2.card2",
  },
  {
    icon: "pen_green",
    text: "about_page.cards2.card3",
  },
];
const cards2 = [
  {
    icon: "checkbox_green",
    text: "about_page.cards2.card4",
  },
  {
    icon: "book_green",
    text: "about_page.cards2.card5",
  },
  {
    icon: "bank_green",
    text: "about_page.cards2.card6",
  },
  {
    icon: "briefcase_green",
    text: "about_page.cards2.card7",
  },
];
const cards3 = [
  "about_page.cards3.card1",
  "about_page.cards3.card2",
  "about_page.cards3.card3",
  "about_page.cards3.card4",
  "about_page.cards3.card5",
  "about_page.cards3.card6",
  "about_page.cards3.card7",
  "about_page.cards3.card8",
  "about_page.cards3.card9",
  "about_page.cards3.card10",
  "about_page.cards3.card11",
  "about_page.cards3.card12",
];
</script>
