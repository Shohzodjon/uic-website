<template>
  <div class="sm:mt-[56px] mt-0 sm:mb-[64px] mb-[15px]">
    <div class="relative mb-2 text-center our section-title_green">
      {{ $t("our") }}
    </div>
    <div class="text-center section-title_white mb-18">
      {{ $t("services") }}
    </div>
    <title-slider
      data-aos="fade-up"
      data-aos-duration="500"
      v-bind="{ cards: cards, brandbook: brandbookPDF }"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import TitleSlider from "@/stories/TitleSlider/TitleSlider.vue";
import { useBrandbookStore } from "@/stores/brandbook";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
const brandbookStore = useBrandbookStore();

const brandbookPDF = computed(() => brandbookStore.brandbook);

const cards = [
  {
    text: "cards.text1",
    desc: "cards.desc1",
    brif_link: "/brief/logo-branding",
    brendbuk: "brendbuk",
  },
  {
    text: "cards.text2",
    desc: "cards.desc2",
    brif_link: "/brief/crm-systems",
    brendbuk: "brendbuk",
  },
  {
    text: "cards.text3",
    desc: "cards.desc3",
    brif_link: "/brief/mobile-application",
    brendbuk: "brendbuk",
  },
  {
    text: "cards.text4",
    desc: "cards.desc4",
    brif_link: "/brief/media-production",
    brendbuk: "brendbuk",
  },
  {
    text: "cards.text5",
    desc: "service.list.webservicepre",
    brif_link: "/brief/websites",
    brendbuk: "brendbuk",
  },
  {
    text: "cards.text6",
    desc: "cards.desc6",
    brif_link: "/brief/design",
    brendbuk: "brendbuk",
  },
];

onMounted(() => {
  brandbookStore.fetchBrandbook();
});
useOnLanguageChange(() => {
  brandbookStore.fetchBrandbook();
});
</script>

<style>
.our::before {
  content: "";
  position: absolute !important;
  display: inline-block;

  top: 10px;
  width: 32px;
  height: 2px;
  background: #fff;
  opacity: 0.2;
  margin-left: -50px;
}
.our::after {
  content: "";
  position: absolute !important;
  top: 10px;
  display: inline-block;
  width: 32px;
  height: 2px;
  background: #fff;
  opacity: 0.2;
  margin-left: 15px;
}
</style>
