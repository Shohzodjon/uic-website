<template>
  <c-loader v-if="false" />
  <div class="company-page">
    <big-title
      class="pt-[130px] pb-[60px]"
      data-aos="fade-left"
      data-aos-duration="600"
      v-bind="{ title: $t('about_us') }"
    />
    <!--    Biz haqimizda-->
    <div
      class="bg-[#141415] lg:pt-[200px] md:pt-[140px] pt-[32px] md:pb-0 sm:pb-[32px] pb-[32px]"
    >
      <SAbout
        v-bind="{
          gallery1: gallery.photo1_list,
          gallery2: gallery.photo2_list,
        }"
      />
    </div>
    <vertical-slider />
    <PCPhotogallery />
    <PCServices />
    <clients-comment />
    <PCTeamMembers />
    <PCVacancyApplyForm />
    <PCPartners />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import BigTitle from "@/stories/BigTitle/BigTitle.vue";
import SAbout from "@/stories/About/SAbout.vue";
import ClientsComment from "@/components/indexSections/ClientsComment.vue";
import VerticalSlider from "@/components/VerticalSlider.vue";
import PCPhotogallery from "../company-page/components/PCPhotogallery.vue";
import PCServices from "../company-page/components/PCServices.vue";
import PCTeamMembers from "../company-page/components/PCTeamMembers.vue";
import PCVacancyApplyForm from "../company-page/components/PCVacancyApplyForm.vue";
import PCPartners from "../company-page/components/PCPartners.vue";

import { useGalleryStore } from "@/stores/gallery";

import useOnLanguageChange from "@/composables/useOnLanguageChange";
const galleryStore = useGalleryStore();
const gallery = computed(() => galleryStore.mainGallery);

const isLoading = ref(true);

useOnLanguageChange(() => {
  galleryStore.fetchMainTeamImages();
});

onMounted(() => {
  galleryStore.fetchMainTeamImages();
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});
</script>
