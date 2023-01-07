<template>
  <div class="opportunities bg-[#ffffff] pt-[64px] pb-[70px]">
    <div class="container">
      <div
        class="mx-auto max-w-[788px] w-full text-center sm:mb-[46px] mb-[41px]"
      >
        <h3
          class="mb-2 font-openSans font-bold lg:text-[36px] lg:leading-[49px] md:text-[30px] md:leading-[38px] sm:text-[28px] sm:leading-[34px] text-[26px] leading-[32px] text-[#4D5870]"
        >
          {{ $t("munir.sequence") }}
        </h3>
        <p
          class="font-openSans font-semibold lg:text-[20px] lg:leading-[27px] md:text-[18px] md:leading-[24px] sm:text-[16px] sm:leading-[20px] text-[15px] leading-[18px] text-[#858D96]"
        >
          {{ $t("munir.opportunity_text") }}
        </p>
      </div>

      <div class="flex flex-col card-wrapper sm:gap-[63px] gap-[32px]">
        <OpportunitiesCard
          v-for="(item, index) in data"
          :key="index"
          v-bind="{
            iphone: item.iphone,
            screen: item.screen,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import OpportunitiesCard from "../components/OpportunitiesCard.vue";
import { reactive } from "vue";

const data = reactive([
  {
    iphone: "/src/pages/portfolio/munir/images/opportunity-phone-1.png",
    screen: "/src/pages/portfolio/munir/images/opportunity-screen-1.png",
  },
  {
    iphone: "/src/pages/portfolio/munir/images/opportunity-phone-2.png",
    screen: "/src/pages/portfolio/munir/images/opportunity-screen-2.png",
  },
  {
    iphone: "/src/pages/portfolio/munir/images/opportunity-phone-3.png",
    screen: "/src/pages/portfolio/munir/images/opportunity-screen-3.png",
  },
]);
</script>
<style scoped>
.opportunities {
  background-image: url(../images/line.png), url(../images/line-right.png);
  background-position: top 124px left 0, right 0 top 0;
  background-size: 100px 100%, 100px 100%;
  background-repeat: no-repeat;
}
</style>
