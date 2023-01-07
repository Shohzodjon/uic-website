<template>
  <c-loader v-if="loading" />
  <section class="overflow-hidden">
    <PCHero />
    <SAbout
      class="lg:pt-[180px] md:pt-[110px] sm:pt-[60px] pt-[60px]"
      v-bind="{ gallery1: gallery.photo1_list, gallery2: gallery.photo2_list }"
    />
    <!-- begin copy -->
    <div
      class="portfolio-section bg-[#141415] pt-8 sm:pt-[60px] md:pt-[118px] pb-[96px]"
    >
      <div class="container">
        <div
          class="lg:flex items-start justify-between text-[#fff]"
          data-aos="fade-right"
          data-aos-duration="600"
        >
          <div class="container-video">
            <div class="overflow-hidden">
              <video class="bg-video" autoplay loop muted>
                <source src="/src/assets/image/text_bg.mp4" type="video/mp4" />
              </video>
            </div>
            <p class="text text2 font-bold uppercase text-[64px] text-[#fff]">
              portfolio
            </p>
          </div>

          <div
            class="flex lg:justify-end gap-[16px] max-w-[660px] lg:mb-0 mb-8"
          >
            <div class="flex flex-wrap gap-2 md:gap-4 sm:gap-2">
              <router-link
                v-for="(item, index) in portfolioCategoryList"
                :key="index"
                :to="`/portfolio/${item.link}`"
                class="font-['Roboto'] lg:px-6 px-3 sm:py-1 py-1 md:py-3.5 text-[#FFFFFF99] whitespace-nowrap border-solid border-[1px] border-[#FFFFFF33] sm:rounded-[12px] rounded-[8px] hover:text-[#00A795] hover:border-[#00A795] duration-300 cursor-pointer"
                aria-label="link"
                >{{ $t(item.title) }}</router-link
              >
            </div>
          </div>
        </div>
        <portfolio-card
          class="index-portfolio"
          :small="true"
          :cards="portfolioImg"
        />

        <div class="md:w-[180px] sm:w-[140px] w-[122px] !h-[48px]">
          <white-button
            data-aos="fade-right"
            data-aos-duration="600"
            v-bind="{
              title: 'services.all',
              link: '/portfolio',
              customClass:
                'portfolio-all-button rounded-8 !whitespace-nowrap sm:pr-auto !xs:pl-4 !pl-4 pr-8',
            }"
            :cards="portfolioImg"
            :small="true"
            class="mt-8 index-portfolio !rounded-[8px] !whitespace-nowrap"
          />
        </div>
      </div>
    </div>
    <!-- end of portfolio -->
    <div class="container py-[40px] md:py-[60px] lg:py-[96px]">
      <p
        class="section-title_green about-us"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        {{ $t("services.subtitle") }}
      </p>
      <div
        class="section-title_white mb-[32px] md:mb-[45px] lg:mb-[56px]"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        {{ $t("services.title") }}
      </div>
      <services-card :serviceCard="serviceCard" />
    </div>
    <!-- end of services -->
    <!-- <div class="bg-[#141415] py-20"> -->
    <!-- <partners-section /> -->
    <PCPartners />
    <!-- </div> -->
    <div class="bg-[#1E1E20] pt-[95px] hidden md:block">
      <div class="container">
        <join-our-team
          data-aos="fade-up"
          data-aos-duration="600"
          v-bind="{
            vacancies: vacancyList,
            title: 'aboutform.title',
            text: 'aboutform.subtitle',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PCPartners from "../company-page/components/PCPartners.vue";
import { computed, onMounted, ref } from "vue";
import PCHero from "./components/PCHero.vue";
import SAbout from "@/stories/About/SAbout.vue";

import { useGalleryStore } from "@/stores/gallery";
import { useVacancyStore } from "@/stores/vacancy";
import { usePortfolioStore } from "@/stores/portfolio";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import PortfolioCard from "@/stories/PortfolioCard/PortfolioCard.vue";
import ServicesCard from "@/stories/ServicesCard/ServicesCard.vue";
import JoinOurTeam from "@/stories/common/block/JoinUs/JoinOurTeam.vue";
import CLoader from "@/components/CLoader.vue";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { useIndexStore } from "@/stores/MetaInfo";
import { useRouter } from "vue-router";

// const modules = [FreeMode];
// const router = useRouter();
const $indexStore = useIndexStore();
const loading = ref(true);

const galleryStore = useGalleryStore();
const vacancyStore = useVacancyStore();
const portfolioStore = usePortfolioStore();
const categoryStore = usePortfolioStore();
//
const gallery = computed(() => galleryStore.mainGallery);
const vacancyList = computed(() => vacancyStore.mainVacancy);
const portfolioImg = computed(() => portfolioStore.portfolioHomePage);
onMounted(() => {
  galleryStore.fetchMainTeamImages();
  vacancyStore.fetchMainVacancy();
  portfolioStore.fetchPortfolioHomePage(1);
  categoryStore.fetchPortfolioCategories();
});
onMounted(() => {
  $indexStore.setMetaInfo({
    title: "UIC Group",
    tagName: "title",
    // title: t("auth_meta"),
  });
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
useOnLanguageChange(() => {
  galleryStore.fetchMainTeamImages();
  vacancyStore.fetchMainVacancy();
  portfolioStore.fetchPortfolioHomePage(1);
  categoryStore.fetchPortfolioCategories();
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

const portfolioCategoryList = ref([
  {
    title: "mobile-application",
    link: "mobile",
  },
  {
    title: "websites",
    link: "websites",
  },
  {
    title: "logo-branding",
    link: "branding",
  },
]);

const gsapIf = ref(false);
setTimeout(() => {
  gsapIf.value = true;
}, 600);
</script>

<style scoped>
.about-us {
  position: relative;
  width: max-content;
}

.about-us::after {
  content: "";
  display: block;
  position: absolute !important;
  right: -40px;
  top: 48% !important;
  width: 32px;
  height: 1.3px;
  background: #fff;
  opacity: 0.2;
}
</style>

<style>
.category-slider {
  width: max-content;
}
.close--icon svg {
  width: 20px;
}
</style>
