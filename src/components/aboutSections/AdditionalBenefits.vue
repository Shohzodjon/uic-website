<template>
  <div class="mt-10">
    <h4 class="about__title mb-4" data-aos="fade-down" data-aos-duration="800">
      {{ $t("about_page.additional_benefits") }}
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        v-for="(item, index) in cards"
        :key="index"
        class="bg-[#252527] p-4 md:py-4 md:pl-6 md:pr-5 rounded-[12px] relative flex items-center"
      >
        <span
          style="height: -webkit-fill-available"
          class="w-[4px] min-h-[24px] bg-[#00A795] block absolute left-0 top-[50%] translate-y-[-50%] rounded-[4px]"
        />
        <p class="about_text">
          {{ $t(item) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  "about_page.additional_benefits_item1",
  "about_page.additional_benefits_item2",
  "about_page.additional_benefits_item3",
  "about_page.additional_benefits_item4",
  "about_page.additional_benefits_item5",
  "about_page.additional_benefits_item6",
  "about_page.additional_benefits_item7",
  "about_page.additional_benefits_item8",
  "about_page.additional_benefits_item9",
  "about_page.additional_benefits_item10",
  "about_page.additional_benefits_item11",
];
</script>
