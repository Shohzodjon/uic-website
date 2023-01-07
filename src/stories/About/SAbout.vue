<template>
  <!--  md:pt-[60px] sm:pt-0 lg:!pt-[191px]-->
  <div
    class="container pb-[60px] md:!px-[124px] md:!pb-[91px] gap-x-[121px] flex justify-center sm:flex-col xl:flex-row lg:flex-col"
  >
    <div
      class="hidden md:!flex justify-center gap-x-6 lg:pb-12 md:pb-12 relative"
    >
      <div
        class="absolute right-[-60px] top-[-60px] z-10 translate-y-[-50%] translate-x-[50%] rotate-anim"
      >
        <span v-for="(item, index) in languages" :key="index">
          <u-icons
            data-aos="zoom-in"
            data-aos-duration="2000"
            v-if="$i18n.locale === item.lang"
            :name="item.name"
            class="text-[#fff]"
          />
        </span>
      </div>
      <div class="mt-[-81px]">
        <SAboutCard v-if="gallery1" :aboutCard="gallery1" />

        <div class="pt-8 line"></div>
        <span
          class="flex items-center gap-[11px] pt-5 leading-[19px] uppercase font-bold"
        >
          <h3 class="font-bold text-white leading-[58px] text-5xl">10</h3>
          <h3 class="text-base text-[#00A795] leading-[19px] w-[170px]">
            {{ $t("about.yuzyillik") }}
          </h3>
        </span>
      </div>
      <div class="about-card2-wrapper">
        <SAboutCard
          v-bind="{
            customClass: '!h-[500px]',
          }"
          class="about-card2"
          v-if="gallery2"
          :aboutCard="gallery2"
          data-aos="fade-down"
        />
      </div>
    </div>
    <div class="">
      <p
        data-aos="fade-left"
        data-aos-duration="1500"
        class="text xs:text-[13px] md:!text-base text-[#00A795] uppercase font-bold leading-[19px] pb-5 about-us"
      >
        {{ $t("about.subtitle") }}
      </p>
      <h2
        data-aos="fade-left"
        data-aos-duration="1600"
        class="text-white xs:text-xl md:!text-5xl xs:pb-5 lg:!pb-8 leading-[58px] font-bold"
      >
        {{ $t("about.title") }}
      </h2>
      <p
        data-aos="fade-left"
        data-aos-duration="1700"
        class="text-[#E0E0E099] xs:text-[13px] md:!text-base font-normal xl:!w-[458px] font-roboto sm:w-full"
      >
        {{ $t("about.trust") }}
      </p>
      <p
        data-aos="fade-left"
        data-aos-duration="1800"
        class="text-[#E0E0E099] xs:text-[13px] md:!text-base font-normal pt-2 xl:!w-[458px] font-roboto sm:w-full"
      >
        {{ $t("about.trust_part") }}
      </p>
      <div
        data-aos="fade-left"
        data-aos-duration="1900"
        class="pt-3 flex items-center xs:items-start xs:justify-around xl:!justify-center xs:gap-[22px] gap-[12px] sm:gap-0 xl:!gap-[84px]"
      >
        <span class="flex items-center justify-center xs:gap-[19px] md:!gap-7">
          <u-icons name="storm_icon" class="text-[#00A795] mr-1" />
          <p
            class="xs:text-[13px] md:!text-base xs:leading-140 text-[#E0E0E0] font-medium xs:w-[107px] md:!w-[105px]"
          >
            {{ $t("about.feature1") }}
          </p>
        </span>
        <span class="flex items-center justify-center xs:gap-3 md:!gap-7">
          <u-icons name="key_icon" class="text-[#00A795] mr-1" />
          <p
            class="xs:text-[13px] md:!text-base xs:leading-140 text-[#E0E0E0] font-medium w-[105px]"
          >
            {{ $t("about.feature2") }}
          </p>
        </span>
      </div>
      <div
        class="flex items-center gap-[16px] mt-[58px]"
        data-aos="fade-left"
        data-aos-duration="1900"
      >
        <router-link :to="{ name: 'PPortfolio' }" aria-label="link">
          <SButton text="buttons.btn1" class="!whitespace-nowrap" />
        </router-link>
        <dark-button
          custom-class="border-white"
          v-bind="{ title: 'buttons.btn2', link: phoneNumber }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import DarkButton from "@/stories/SButtons/DButton/DarkButton.vue";
import languages from "@/pages/Index/data/lang";
import SButton from "@/components/Button/SButton.vue";
import SAboutCard from "@/stories/About/Card/SAboutCard.vue";
import { useDomainVariables } from "@/composables/useDomainVariables";

export interface Props {
  gallery1?: [];
  gallery2?: [];
}

withDefaults(defineProps<Props>(), {});

const { phoneNumber } = useDomainVariables();
</script>

<style scoped>
.about-us {
  position: relative;
  margin-left: 37px;
}
.about-us::before {
  content: "";
  display: block;
  position: absolute !important;
  left: 0;
  top: 28% !important;
  width: 32px;
  height: 1.3px;
  background: #fff;
  opacity: 0.2;
}
@media screen and (min-width: 370px) and (max-width: 800px) {
  .about-us::before {
    top: 20% !important;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate-anim {
  animation: rotate 7s linear infinite;
}

.text::before {
  content: "";
  position: absolute;
  width: 28px;
  height: 1.5px;
  top: 0;
  left: -35px;
}
.line {
  position: relative;
  opacity: 20%;
}
.line::after {
  content: "";
  position: absolute;
  width: 283px;
  height: 2px;
  background-color: #fff;
}
</style>
