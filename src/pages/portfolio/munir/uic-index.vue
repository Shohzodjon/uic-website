<template>
  <div class="overflow-hidden pt-[33px] bg-[#F1F3F8]">
    <div class="">
      <div class="container">
        <the-header
          class="the-header"
          hamburgerClass="bg-[#F07C29]"
          title=""
          customMenuLanguage=" !border border-solid !border-[#BCC1CC]"
          customClassForGlobe="!text-[#96969699]"
          customClassLang="!text-[#51515199]"
          iconName="munir_uic"
          adaptiveIconName="adaptive_logo_icon"
          customClassIcon="text-[#515151]"
          customClassPage="active text-[#F07C29]"
          borderClass=" border border-solid border-[#EBECED] md:bg-[#fff]"
          customClassHeaderBg=""
          customClass="text-[#616161] hover:text-[#92929C]"
          responsiveLanguageClass="!bg-[#F07C29] "
        />
      </div>
      <the-hero />
    </div>

    <the-features />
    <about-search />
    <interface-exterior />
    <opportunities-sequence />
  </div>
</template>

<script setup>
import TheHeader from "@/pages/portfolio/component/TheHeader/TheHeader.vue";
import TheHero from "./sections/TheHero.vue";
import TheFeatures from "./sections/TheFeatures.vue";
import AboutSearch from "./sections/AboutSearch.vue";
import InterfaceExterior from "./sections/InterfaceExterior.vue";
import OpportunitiesSequence from "./sections/OpportunitiesSequence.vue";
</script>
