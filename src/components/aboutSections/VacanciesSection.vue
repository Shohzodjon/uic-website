<template>
  <div>
    <h4
      class="about__title mt-10 mb-5"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t("about_page.vacancies_directions") }}:
    </h4>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <router-link
        data-aos="fade-right"
        data-aos-duration="800"
        to="/vacancy"
        v-for="(item, index) in vacancies"
        :key="index"
        class="border-[#FFFFFF33] border-[1px] rounded-[12px] p-[10px] md:py-[14px] md:px-[16px] flex text-[12px] sm:text-[14px] md:text-[16px] text-[#FFFFFF99] uppercase leading-[19px] tracking-[0.03em] text-[16px] group hover:bg-[#242426] duration-300"
      >
        <span class="group-hover:text-[#00A795] duration-300">#</span>
        <p class="group-hover:text-[#fff] duration-300">
          {{ $t(item) }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
const vacancies = [
  "Front-end (Vue3)",
  "Back-end (Python)",
  "UX/UI",
  "data_analytics",
  "devOps_engineer",
  "mobile_Devs",
  "game_devs",
  "project_managers",
  "marketing_managers",
  "qa_engineers",
  "content_manager",
  "3d_designers",
  "colorists",
  "video_editors",
];
</script>
