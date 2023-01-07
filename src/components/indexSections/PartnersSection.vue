<template>
  <div class="container">
    <div class="xl:max-w-[990px] mx-auto">
      <div
        class="section-title_green mb-[13px]"
        data-aos="fade-right"
        data-aos-duration="600"
      >
        {{ $t("partners.subtitle") }}
      </div>
      <div
        class="section-title_white lg:leading-[43px] md:leading-[38px] sm:leading-[34px] leading-[34px] md:text-[36px] sm:text-[28px] text-[28px] mb-[36px] md:mb-[50px] lg:mb-[64px]"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        {{ $t("partners.title") }}
      </div>
      <partner-card-slider
        class="partners-slider"
        data-aos="fade-left"
        data-aos-duration="1000"
        :sliderCard="partners"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import PartnerCardSlider from "@/stories/PartnerCardSlider/PartnerCardSlider.vue";
import { usePartnersStore } from "@/stores/partners";
import { useGlobalStore } from "@/stores/global";
import useOnLanguageChange from "@/composables/useOnLanguageChange";

const globalStore = useGlobalStore();
const loading = ref(false);
const partnersStore = usePartnersStore();

const partners = computed(() => partnersStore.mainPartners);

useOnLanguageChange(() => {
  partnersStore.fetchMainPartners();
});
onMounted(() => {
  partnersStore.fetchMainPartners().then(() => {
    globalStore.openLoad(loading);
  });
});
</script>

<style>
.swiper-wrapper {
  gap: 8px;
}
.swiper-slide {
  margin-top: 0 !important;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 !important;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: white !important;
  opacity: 1;
  color: #ffff !important;
}

.swiper-pagination-bullet {
  width: 41px;
  height: 2px;
  border-radius: 0px;
  background: #fff;
  opacity: 0.2;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  display: flex;
  justify-content: center;
}
</style>
