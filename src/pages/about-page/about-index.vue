<template>
  <div class="text-[#fff]">
    <div class="showrell-section pt-[129px]">
      <div class="container">
        <about-showrell />
      </div>
    </div>
    <div class="container">
      <div class="max-w-[990px] mx-auto">
        <service-directions />
        <projects-portfolio />
        <solutions-for-education />
        <!--        Учебный центр при UIC-->
        <gallery-card-slider
          class="mt-10"
          :title="'about_page.training_Center_UIC'"
          :desc="'about_page.training_Center_UIC_desc'"
          :galleryProps="trainingCenterList"
          :sliderClass="'slider1'"
        />
        <!--        Co-learning Center - друзья UIC-->
        <div>
          <p
            class="my-10 about_text"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {{ $t("about_page.about_clc_uic") }}
          </p>
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.clc_friend_uic'"
            :galleryProps="clcList"
            :sliderClass="'slider2'"
          />
        </div>

        <child-projects class="mt-10" />
        <brand-year data-aos="fade-up" data-aos-duration="800" />
        <mangu-sarkarda />
        <!--        office-->
        <gallery-card-slider
          class="mt-10"
          :galleryProps="officeList"
          :sliderClass="'sliderOffice'"
        />
        <uic-clan />
        <vacancies-section />
        <silicon-valley data-aos="fade-left" data-aos-duration="800" />

        <!--        SLAYDERLA-->
        <div>
          <h4
            class="mb-4 about__title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ $t("about_page.team_building") }}
          </h4>
          <p class="about_text" data-aos="fade-up" data-aos-duration="1000">
            {{ $t("about_page.team_building_desc") }}:
          </p>
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.zakovat'"
            :desc="'about_page.zakovat_desc'"
            :galleryProps="zakovatList"
            :sliderClass="'slider4'"
          />
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.meetup'"
            :desc="'about_page.meetup_desc'"
            :galleryProps="meetuplist"
            :sliderClass="'slider5'"
          />
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.football'"
            :desc="'about_page.football_desc'"
            :galleryProps="footbalList"
            :sliderClass="'slider6'"
          />
          <gallery-card-slider
            class="mt-10 birthday-slider"
            :title="'about_page.uic_birthday'"
            :desc="'about_page.uic_birthday_desc'"
            :galleryProps="birthdayList"
            :sliderClass="'slider7'"
          />
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.BeFit'"
            :desc="'about_page.BeFit_desc'"
            :galleryProps="befitList"
            :sliderClass="'slider8'"
          />
          <p
            class="mt-10 mb-2 about_text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ $t("about_page.office_desc") }}
          </p>
          <p
            class="mb-10 about_text"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {{ $t("about_page.office_desc2") }}
          </p>
          <gallery-card-slider
            class="mt-10"
            :title="'about_page.our_office'"
            :galleryProps="ofis"
            :sliderClass="'slider9'"
          />

          <gallery-card-slider
            class="mt-10"
            :title="'about_page.birthday_party'"
            :desc="'about_page.birthday_party_desc'"
            :videoProps="videoSlider"
            :sliderClass="'sliderVideo'"
          />
        </div>
        <!--        ABOUT UIC-->
        <div>
          <div>
            <div
              class="mt-10 mb-4 about__title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {{ $t("about_page.health") }}
            </div>
            <p
              class="mb-10 about_text"
              data-aos="fade-up"
              data-aos-duration="850"
            >
              {{ $t("about_page.health_desc") }}
            </p>
          </div>

          <div>
            <div
              class="mb-4 about__title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {{ $t("about_page.value") }}
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="850"
              class="mb-3 about_text last:mb-10"
              v-for="(item, index) in valueList"
              :key="index"
            >
              {{ $t(item) }}
            </p>
          </div>
          <div>
            <div
              class="mt-10 mb-4 about__title"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {{ $t("about_page.company_code") }}
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="850"
              class="mb-3 about_text last:mb-10"
              v-for="(item, index) in company_code_descList"
              :key="index"
            >
              {{ $t(item) }}
            </p>
          </div>
        </div>
        <about-management />
        <additional-benefits />
        <meetings-with-youth />
        <vacancies-carousel />
        <div
          class="font-['Roboto'] text-[16px] leading-[144%] tracking-[0.2px] mt-10 mb-[64px]"
        >
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            class="mb-2 font-semibold"
          >
            {{ $t("work_time") }}
          </p>
          <p data-aos="fade-up" data-aos-duration="850">
            {{ $t("become_teamt_contact_us") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutShowrell from "../../components/aboutSections/AboutShowrell.vue";
import ServiceDirections from "../../components/aboutSections/ServiceDirections.vue";
import ProjectsPortfolio from "../../components/aboutSections/ProjectsPortfolio.vue";
import SolutionsForEducation from "../../components/aboutSections/SolutionsForEducation.vue";
import GalleryCardSlider from "@/stories/GalleryCardSlider/GalleryCardSlider.vue";
import ChildProjects from "../../components/aboutSections/ChildProjects.vue";
import BrandYear from "../../components/aboutSections/BrandYear.vue";
import ManguSarkarda from "../../components/aboutSections/ManguSarkarda.vue";
import UicClan from "../../components/aboutSections/UicClan.vue";
import VacanciesSection from "../../components/aboutSections/VacanciesSection.vue";
import SiliconValley from "../../components/aboutSections/SiliconValley.vue";
import AboutManagement from "../../components/aboutSections/AboutManagement.vue";
import AdditionalBenefits from "../../components/aboutSections/AdditionalBenefits.vue";
import MeetingsWithYouth from "../../components/aboutSections/MeetingsWithYouth.vue";
import VacanciesCarousel from "../../components/aboutSections/VacanciesCarousel.vue";

import { onMounted } from "vue";
import { useIndexStore } from "@/stores/MetaInfo";

const valueList = [
  "about_page.value_desc",
  "about_page.value_desc2",
  "about_page.value_desc3",
  "about_page.value_desc4",
];
const company_code_descList = [
  "about_page.company_code_desc",
  "about_page.company_code_desc2",
  "about_page.company_code_desc3",
];
const trainingCenterList = [
  "/uic-images/image/clc-tb/senter1.jpg",
  "/uic-images/image/clc-tb/senter7.jpg",
  "/uic-images/image/clc-tb/senter2.jpg",
  "/uic-images/image/clc-tb/senter6.jpg",
  "/uic-images/image/clc-tb/senter4.jpg",
  "/uic-images/image/clc-tb/senter5.jpg",
  "/uic-images/image/clc-tb/senter3.jpg",
  "/uic-images/image/clc-tb/senter8.jpg",
];
const clcList = [
  "/uic-images/image/clc-courses/clc1.jpg",
  "/uic-images/image/clc-courses/clc7.jpg",
  "/uic-images/image/clc-courses/clc2.jpg",
  "/uic-images/image/clc-courses/clc5.jpg",
  "/uic-images/image/clc-courses/clc3.jpg",
  "/uic-images/image/clc-courses/clc4.jpg",
];
const officeList = [
  "/uic-images/image/office/office1.png",
  "/uic-images/image/office/office4.jpg",
  "/uic-images/image/office/office2.png",
  "/uic-images/image/office/office5.jpg",
  "/uic-images/image/office/office3.png",
];
const zakovatList = [
  "/uic-images/image/zakovat/zakovat1.png",
  "/uic-images/image/zakovat/zakovat2.jpg",
  "/uic-images/image/zakovat/zakovat3.jpg",
  "/uic-images/image/zakovat/zakovat4.jpg",
  "/uic-images/image/zakovat/zakovat5.jpg",
  "/uic-images/image/zakovat/zakovat6.jpg",
];
const meetuplist = [
  "/uic-images/image/meetup/meetup1.png",
  "/uic-images/image/meetup/meetup2.png",
  "/uic-images/image/meetup/meetup3.jpg",
  "/uic-images/image/meetup/meetup4.jpg",
  "/uic-images/image/meetup/meetup5.jpg",
  "/uic-images/image/meetup/meetup6.jpg",
  "/uic-images/image/meetup/meetup7.jpg",
];
const footbalList = [
  "/uic-images/image/football/footbal1.jpg",
  "/uic-images/image/football/footbal2.jpg",
  "/uic-images/image/football/footbal3.jpg",
  "/uic-images/image/football/footbal4.jpg",
  "/uic-images/image/football/footbal5.png",
  "/uic-images/image/football/footbal6.png",
];
const birthdayList = [
  "/uic-images/image/birthday/birthday1.jpg",
  "/uic-images/image/birthday/birthday2.jpg",
  "/uic-images/image/birthday/birthday3.jpg",
  "/uic-images/image/birthday/birthday4.jpg",
  "/uic-images/image/birthday/birthday5.jpg",
  "/uic-images/image/birthday/birthday6.jpg",
  "/uic-images/image/birthday/birthday7.jpg",
  "/uic-images/image/birthday/birthday8.jpg",
  "/uic-images/image/birthday/birthday9.jpg",
];
const befitList = [
  "/uic-images/image/befit/befit1.png",
  "/uic-images/image/befit/befit3.jpg",
  "/uic-images/image/befit/befit4.png",
  "/uic-images/image/befit/befit2.jpg",
  "/uic-images/image/befit/befit5.png",
];

const ofis = [
  "/uic-images/image/office/ofis1.jpg",
  "/uic-images/image/office/ofis2.jpg",
  "/uic-images/image/office/ofis3.jpg",
  "/uic-images/image/office/ofis4.jpg",
  "/uic-images/image/office/ofis5.jpg",
];
const videoSlider = [
  {
    link: "https://t.me/uicgroup/226",
    img: "/uic-images/image/video1.png",
  },
];

const $indexStore = useIndexStore();

onMounted(() => {
  $indexStore.setMetaInfo({
    title: "About UIC",
    tagName: "title",
    // title: t("auth_meta"),
  });
});
</script>

<style scoped>
.showrell-section {
  background: linear-gradient(
    180deg,
    rgba(0, 167, 149, 0.12) 0%,
    rgba(0, 167, 149, 0) 100%
  );
  /*min-height: 100vh;*/
}
</style>
