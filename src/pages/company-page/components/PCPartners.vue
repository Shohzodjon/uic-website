<template>
  <div class="bg-[#141415] md:py-[96px] sm:py-[30px] py-[30px]">
    <!-- Grid holatida md gacha-->
    <div class="container hidden md:block">
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

        <partner-cards
          class="partners-slider"
          data-aos="fade-left"
          data-aos-duration="1000"
          v-bind="{
            partners: partners,
          }"
        />
      </div>
    </div>
    <!-- Swiper holatida 375px ~ sm  -->
    <partners-section class="block md:hidden" />
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import PartnersSection from "@/components/indexSections/PartnersSection.vue";
import PartnerCards from "@/stories/PartnerCards/PartnerCards.vue";
import { usePartnersStore } from "@/stores/partners";

import useOnLanguageChange from "@/composables/useOnLanguageChange";

const partnersStore = usePartnersStore();
const partners = computed(() => partnersStore.mainPartners);

onMounted(() => {
  partnersStore.fetchMainPartners();
});
useOnLanguageChange(() => {
  partnersStore.fetchMainPartners();
});
</script>
