<template>
  <div
    class="features bg-white xl:pt-[500px] lg:pt-[450px] md:pt-[340px] sm:pt-[340px] pt-[220px] pb-[64px]"
  >
    <div class="container">
      <div class="relative container__inner">
        <!-- Macbook in position -->
        <div
          class="absolute devices-wrapper xl:top-[-790px] lg:top-[-670px] md:top-[-570px] sm:top-[-450px] top-[-330px]"
        >
          <img
            class="max-w-]1193px] w-full max-h-[726px] h-full text-center"
            src="../images/macbook.png"
            alt="macbook"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <img
            class="absolute right-0 lg:bottom-[46px] md:bottom-[32px] sm:bottom-[22px] bottom-[14px] lg:max-w-[182px] md:max-w-[150px] sm:max-w-[140px] max-w-[82px] w-full lg:max-h-[366px] md:max-h-[300px] sm:max-h-[270px] max-h-[160px] h-full"
            src="../images/hero-iphone.png"
            alt="iphone"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>

        <div class="mx-auto max-w-[788px] w-full text-center">
          <h3
            data-aos="fade-left"
            data-aos-duration="1700"
            class="mb-2 font-openSans font-bold lg:text-[36px] lg:leading-[49px] md:text-[30px] md:leading-[38px] sm:text-[28px] sm:leading-[34px] text-[26px] leading-[32px] text-[#4D5870]"
          >
            {{ $t("munir.apply") }}
          </h3>

          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            class="mb-8 font-openSans font-semibold lg:text-[20px] lg:leading-[27px] md:text-[18px] md:leading-[24px] sm:text-[16px] sm:leading-[20px] text-[15px] leading-[18px] text-[#858D96]"
          >
            {{ $t("munir.features_text") }}
          </p>
        </div>

        <!-- Cards -->
        <div class="flex flex-wrap justify-center gap-6 mb-10 card-wrapper">
          <colors-card
            data-aos="fade-left"
            data-aos-duration="1700"
            v-for="(item, index) in data"
            :key="index"
            v-bind="{
              image: item.image,
              colorKey: item.colorKey,
              customBg: item.customBg,
              mainCustom: item.mainCustom,
              textColor: item.textColor,
            }"
          />
        </div>

        <!-- Munir market -->
        <MunirMarket />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ColorsCard from "/src/pages/portfolio/munir/components/ColorsCard.vue";
import MunirMarket from "/src/pages/portfolio/munir/components/MunirMarket.vue";
import { reactive } from "vue";
const data = reactive([
  {
    image: "/src/pages/portfolio/munir/images/pattern-bg.png",
    mainCustom: "text-[#000000]",
    textColor: "text-[#000000]",
    colorKey: "#F1F3F8",
    customBg: "bg-[#F1F3F8]",
  },
  {
    image: "/src/pages/portfolio/munir/images/pattern-bg.png",
    mainCustom: "text-[#ffffff]",
    textColor: "text-[#ffffff]",
    colorKey: "#F07C29",
    customBg: "bg-[#F07C29]",
  },
  {
    image: "/src/pages/portfolio/munir/images/pattern-bg.png",
    mainCustom: "text-[#ffffff]",
    textColor: "text-[#ffffff]",
    colorKey: "#F54646",
    customBg: "bg-[#F54646]",
  },
  {
    image: "/src/pages/portfolio/munir/images/pattern-bg-white.png",
    mainCustom: "text-[#ffffff]",
    textColor: "text-[#ffffff]",
    colorKey: "#100E0E",
    customBg: "bg-[#100E0E]",
  },
]);
</script>

<style scoped></style>
