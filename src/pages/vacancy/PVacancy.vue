<template>
  <c-loader v-if="loading" />
  <div>
    <div class="container">
      <div
        class="pt-[130px] pb-[80px]"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <big-title v-bind="{ title: $t('header.vacancy') }" />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-[49px]"
      >
        <PCVacancy :vacancy="vacancy" />
      </div>
      <div
        class="pt-[61px] pb-16 flex justify-center items-center"
        data-aos="fade-up"
      >
        <button
          :class="vacancy.length >= 6 ? 'hidden' : ''"
          class="bxs pt-[13px] pb-3.5 px-6 font-bold text-base text-white border border-solid border-[#ffffff33] rounded-xl duration-300 hover:border-[#00A795] hover:text-[#00A795]"
          @click="pageSize"
          aria-label="button"
        >
          {{ $t("load_more") }}
        </button>
      </div>
    </div>
    <clients-comment about="about" />
  </div>
</template>
<script lang="ts" setup>
import BigTitle from "@/stories/BigTitle/BigTitle.vue";
import ClientsComment from "@/components/indexSections/ClientsComment.vue";
import PCVacancy from "@/pages/vacancy/components/PCVacancy.vue";
import CLoader from "@/components/CLoader.vue";
import { useVacancyStore } from "@/stores/vacancy";
import { computed, onMounted, ref } from "vue";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";

const globalStore = useGlobalStore();
const vacancyStore = useVacancyStore();
const vacancy = computed(() => vacancyStore.mainVacancy);
const $indexStore = useIndexStore();

const size = ref(6);
const loading = ref(true);
const pageSize = () => {
  size.value = 0;
  vacancyStore.fetchMainVacancy(size.value);
};

onMounted(() => {
  vacancyStore
    .fetchMainVacancy(size.value)
    .then(() => {
      globalStore.openLoad(loading);
    })
    .finally(() => {
      setTimeout(() => (loading.value = false), 300);
    });
});
onMounted(() => {
  $indexStore.setMetaInfo({
    title: "UIC Vacancy",
    tagName: "title",
    // title: t("auth_meta"),
  });
});

useOnLanguageChange(() => {
  vacancyStore.fetchMainVacancy(size.value);
});
</script>
<style></style>
