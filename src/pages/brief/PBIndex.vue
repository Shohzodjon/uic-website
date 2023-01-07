<template>
  <c-loader v-if="loading" />
  <div class="container !pb-12 md:pb-36 md:pt-[140px] sm:pt-28 pt-24">
    <button
      :data-aos-duration="500"
      class="flex"
      data-aos="fade-right"
      @click="historyBack()"
      aria-label="button"
    >
      <UIcons class="text-white" name="arrow_left" />
    </button>
    <div
      class="flex flex-col items-center gap-3 mt-8 mb-8 md:items-start md:mb-11"
    >
      <div
        :data-aos-duration="600"
        class="section-title_green"
        data-aos="fade-right"
      >
        {{ $t("work.subtitle") }}
      </div>
      <div
        :data-aos-duration="700"
        class="section-title_white :!text-[28px] md:!text-[36px] text-center md:text-left"
        data-aos="fade-right"
      >
        {{ $t("work.title") }}
      </div>
    </div>
    <services-card :serviceCard="serviceCard" />
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import ServicesCard from "@/stories/ServicesCard/ServicesCard.vue";
import CLoader from "@/components/CLoader.vue";
import { onMounted, ref } from "vue";
import { useIndexStore } from "@/stores/MetaInfo";

const $indexStore = useIndexStore();
const loading = ref(true);

onMounted(() => {
  $indexStore.setMetaInfo({
    title: "UIC Brief",
    tagName: "title",
  });
  setTimeout(() => {
    loading.value = false;
  }, 300);
});
const serviceCard = ref([
  {
    title: "services.list.webservice",
    subtitle: "services.list.webservicepre",
    link: "brief/websites",
  },
  {
    title: "services.list.mobileservice",
    subtitle: "services.list.mobileservicepre",
    link: "brief/mobile-application",
  },
  {
    title: "services.list.uiuxservice",
    subtitle: "services.list.uiuxservicepre",
    link: "brief/design",
  },
  {
    title: "services.list.mediaservice",
    subtitle: "services.list.mediaservicepre",
    link: "brief/media-production",
  },
  {
    title: "services.list.crmservice",
    subtitle: "services.list.crmservicepre",
    link: "brief/crm-systems",
  },
  {
    title: "services.list.logoservice",
    subtitle: "services.list.logoservicepre",
    link: "brief/logo-branding",
  },
  {
    title: "services.list.gameservice",
    subtitle: "services.list.gameservicepre",
    link: "brief/game",
  },
  {
    title: "services.list.intellectservice",
    subtitle: "services.list.intellectservicepre",
    link: "brief/ai",
  },
  {
    title: "services.list.cyberservice",
    subtitle: "services.list.cyberservicepre",
    link: "brief/cybersecurity",
  },
]);
function historyBack() {
  history.go(-1);
}
</script>
