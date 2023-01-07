<template>
  <div>
    <h4 class="mb-4 about__title" data-aos="fade-up" data-aos-duration="800">
      {{ $t("about_page.about_management") }}
    </h4>
    <ul>
      <li
        data-aos="fade-up"
        data-aos-duration="800"
        v-for="(item, index) in list"
        :key="index"
        class="pt-5 first:pt-0 last:border-b-[0px] flex md:items-center gap-3"
      >
        <span
          class="w-[8px] h-[8px] bg-[#00A795] rounded-[50%] flex shrink-0 mt-2 md:-mt-5"
        />
        <p
          class="font-['Roboto'] border-b-[#39393B] border-b-[1px] w-full pb-5"
        >
          {{ $t(item) }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const list = [
  "about_page.about_management_desc1",
  "about_page.about_management_desc2",
  "about_page.about_management_desc3",
  "about_page.about_management_desc4",
  "about_page.about_management_desc5",
];
</script>

<style scoped>
li:last-child p {
  border: none;
  padding-bottom: 0;
}
</style>
