<template>
  <section
    class="error-section relative overflow-hidden"
    ref="target"
    :style="targetStyle"
  >
    <div
      class="container w-full h-full flex justify-center items-center flex-col pt-20"
    >
      <!-- begin flex -->
      <div class="flex wrapp mx-auto items-center justify-center">
        <UIcon name="error_four" class="error-four -mb-4" :style="layer1" />
        <div class="flex items-center relative" :style="layer2">
          <UIcon name="error_wing_left" class="error-wing" />
          <UIcon name="error_ghost" class="ghost-error" />
          <UIcon name="error_wing_right" class="error-wing" />

          <div class="ghost-under">
            <svg
              width="173"
              height="35"
              viewBox="0 0 173 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M86.2217 34.1218C133.841 34.1218 172.443 26.4833 172.443 17.0609C172.443 7.63839 133.841 0 86.2217 0C38.6027 0 0 7.63839 0 17.0609C0 26.4833 38.6027 34.1218 86.2217 34.1218Z"
                fill="url(#paint0_linear_688_7387)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_688_7387"
                  x1="0.0284348"
                  y1="17.093"
                  x2="172.476"
                  y2="17.093"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#585858" />
                  <stop offset="1" stop-color="#1D1D1F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <UIcon name="error_four" class="error-four -mb-4" :style="layer1" />
      </div>
      <!-- end of flex -->
      <div class="wrapp mx-auto">
        <UIcon name="error_text" class="error-text wrapp" :style="layer3" />
      </div>

      <p
        class="text-[#969696] md:text-[#373737] text-[13px] sm:text-sm font-medium md:text-base leading-[19px] tracking-[0.002em] md:font-normal mt-2 md:mt-[11.83px] text-center"
      >
        {{ $t("error.not_found") }}
      </p>
      <button
        class="error-btn overflow-hidden relative px-4 mt-20 py-[10px] md:pt-[13px] md:px-8 md:pb-[14px] z-20 text-[13px] uppercase md:lowercase md:text-base font-bold leading-130 tracking-[0.02em] wrapp block mx-auto"
        aria-label="button"
      >
        <router-link to="/" class="relative z-20 md:normal-case">
          {{ $t("back_to_main") }}
        </router-link>
      </button>
    </div>
    <UIcon name="error_star" class="star-one star-anima1" />
    <UIcon name="error_star" class="star-two star-anima2" />
    <UIcon name="error_star" class="star-three star-anima" />
    <UIcon name="error_star" class="star-four star-anima1" />
    <UIcon name="error_star" class="star-five star-anima2" />
    <UIcon name="error_star" class="star-six star-anima1" />
    <UIcon name="error_star" class="star-seven star-anima2" />
    <UIcon name="error_star" class="star-eight star-anima" />
    <UIcon name="error_star" class="star-nine star-anima1" />
    <UIcon name="error_star" class="star-ten star-anima2" />
    <UIcon name="error_star" class="star-eleven star-anima" />
    <UIcon name="error_star" class="star-twelve star-anima1" />
    <div class="left-img">
      <img
        src="/uic-images/image/left_glossy.png"
        alt="left_glossy"
        class="w-full h-full hidden md:block opacity-90"
        :style="layer4"
      />
      <img
        src="/uic-images/image/left_glossy2.png"
        alt="left_glossy"
        class="w-full h-full md:hidden opacity-90"
        :style="layer4"
      />
    </div>
    <div class="right-img">
      <img
        src="/uic-images/image/right_glossy.png"
        alt="right_glossy"
        class="w-full h-full opacity-50 hidden md:block"
        :style="layer4"
      />
      <img
        src="/uic-images/image/right_glossy2.png"
        alt="right_glossy"
        class="w-full h-full md:hidden"
        :style="layer4"
      />
    </div>
  </section>
</template>
<script lang="ts" setup>
import UIcon from "@/stories/ui/UIcons/UIcons.vue";

import { computed, reactive, ref, onMounted } from "vue";
import type { CSSProperties } from "vue";
import { useParallax } from "@vueuse/core";
import { useIndexStore } from "@/stores/MetaInfo";

const target = ref(null);
const parallax = reactive(useParallax(target));
const $indexStore = useIndexStore();
const targetStyle: CSSProperties = {
  transition: ".3s ease-out all",
};
const layerBase: CSSProperties = {
  transition: ".3s euseMediaQueryase-out all",
};

const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 39
  }px)`,
}));
const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 50}px) translateY(${
    parallax.roll * 30
  }px)`,
}));
const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 25
  }px)`,
}));
const layer4 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 25
  }px)`,
}));
onMounted(() => {
  $indexStore.setMetaInfo({
    title: "Page not found",
    tagName: "title",
  });
});
</script>

<style scoped>
.error-section {
  width: 100%;
  height: 100vh;
  background-image: url("/uic-images/image/image/error-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden !important;
}
.left-img,
.right-img {
  position: absolute;
  z-index: 222;
}
.left-img {
  width: 254.55px;
  height: 260.03px;
  bottom: 0;
  left: -15px;
  transform: rotate(10deg);
  z-index: 15;
}
.left-img img {
  filter: blur(3px);
}
.right-img {
  width: 111.97px;
  height: 118.62px;
  top: 15%;
  right: -10px;
  transform: rotate(-14.11deg);
}
.right-img img {
  filter: blur(1.5px);
}
.error-btn {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
}

.wrapp {
  width: max-content;
  height: max-content;
}

.star-anima {
  animation: activeStar 3s linear infinite;
}
@keyframes activeStar {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
.star-anima1 {
  animation: activeStar1 3s linear infinite;
  animation-delay: 2s;
}
@keyframes activeStar1 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
.star-anima2 {
  animation: activeStar2 3s linear infinite;
  animation-delay: 4s;
}
@keyframes activeStar2 {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (min-width: 350px) and (max-width: 575.9px) {
  .error-section {
    background-image: url("/uic-images/image/error_bg2.png");
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .left-img {
    width: 174.55px;
    height: 200.03px;
    bottom: 5%;
    filter: blur(0px);
    opacity: 1;
  }
  .right-img {
    width: 105.42px;
    height: 111.67px;
    top: 0;
    right: 0;
    filter: blur(1px);
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .error-section {
    background-image: url("/uic-images/image/error_bg2.png");
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .left-img {
    width: 204.55px;
    height: 250.03px;
  }
  .right-img {
    width: 98.97px;
    height: 105.62px;
  }
}
@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .error-section {
    background-image: url("/uic-images/image/error_bg2.png");
    background-size: 100%, 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .right-img {
    top: 10%;
  }
}
</style>
<style>
.wrapp {
  width: max-content !important;
  height: max-content !important;
}
.ghost-under {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
}
.ghost-under svg {
  width: 150px;
}

.error-wing svg path {
  fill: #828282;
  opacity: 0.8;
}

.error-wing svg {
  width: 70px;
}
.ghost-error svg {
  width: 100px;
}
.error-four svg {
  width: 100px;
}
.error-text svg path {
  fill: #00a795;
}
.error-text svg {
  width: 300px;
  margin-top: 30px;
}
.ghost-error svg path {
  fill: #fff;
}
.ghost-error svg path:nth-child(2) {
  fill: #212020;
}
.ghost-error svg path:nth-child(3) {
  fill: #212020;
}
.star-one svg {
  position: absolute;
  top: 72px;
  left: 30%;
  width: 15px;
  height: 14px;
}
.star-one svg path {
  fill: #373737;
}
.star-two svg {
  position: absolute;
  top: 72px;
  right: 36%;
  width: 16px;
  height: 15px;
}
.star-two svg path {
  fill: #00a795;
  opacity: 0.28;
}
.star-three svg {
  position: absolute;
  right: 24%;
  top: 140px;
  width: 16px;
  height: 15px;
}
.star-three svg path {
  fill: #00a795;
}
.star-four svg {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 247px;
  left: 25%;
}
.star-four svg path {
  fill: #00a795;
  opacity: 0.28;
}
.star-five svg {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 330px;
  left: 40%;
}
.star-five svg path {
  fill: #373737;
}
.star-six svg {
  position: absolute;
  width: 16px;
  height: 15px;
  top: 340px;
  right: 20%;
}
.star-six svg path {
  fill: #373737;
}
.star-seven svg {
  position: absolute;
  left: 27%;
  top: 426px;
  width: 15px;
  height: 15px;
}
.star-seven svg path {
  fill: #00a795;
}
.star-eight svg {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 21.5%;
  bottom: 460px;
}
.star-eight svg path {
  fill: #373737;
}
.star-nine svg {
  position: absolute;
  width: 16px;
  height: 14px;
  left: 23%;
  bottom: 263px;
}
.star-nine svg path {
  fill: #00a795;
}
.star-ten svg {
  position: absolute;
  width: 16px;
  height: 14px;
  right: 30%;
  bottom: 194px;
}
.star-ten svg path {
  fill: #00a795;
}
.star-eleven svg {
  position: absolute;
  bottom: 122px;
  left: 24%;
  width: 15px;
  height: 15px;
}
.star-eleven svg path {
  fill: #373737;
}
.star-twelve svg {
  position: absolute;
  bottom: 88px;
  right: 23%;
  width: 15px;
  height: 14px;
}
.star-twelve path {
  fill: #00a795;
  opacity: 0.28;
}

@media screen and (min-width: 350px) and (max-width: 575.9px) {
  .error-four svg {
    width: 70px;
    height: 100px;
  }
  .error-wing svg {
    width: 50px;
  }
  .ghost-error svg {
    width: 70px;
  }
  .ghost-under {
    bottom: 15px;
  }
  .ghost-under svg {
    width: 120px;
  }
  .error-text svg {
    width: 210px;
    margin-top: 0;
  }
  .star-one svg,
  .star-two svg,
  .star-three svg,
  .star-four svg,
  .star-five svg,
  .star-six svg,
  .star-seven svg,
  .star-eight svg,
  .star-nine svg,
  .star-ten svg,
  .star-twelve svg,
  .star-eleven svg {
    display: none;
  }
}
@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .error-four svg {
    width: 80px;
    height: 110px;
  }
  .error-wing svg {
    width: 65px;
  }
  .ghost-error svg {
    width: 90px;
  }
  .ghost-under {
    bottom: 0px;
  }
  .ghost-under svg {
    width: 150px;
  }
  .error-text svg {
    width: 280px;
    margin-top: 32.38px;
  }

  .star-one svg {
    top: 62px;
    left: 23%;
  }
  .star-two svg {
    top: 62px;
    right: 25%;
  }
  .star-three svg {
    top: 107px;
    right: 10%;
  }
  .star-four svg {
    top: 147px;
    left: 15%;
  }
  .star-five svg {
    top: 147px;
    left: 55%;
  }
  .star-six svg {
    top: 230px;
    right: 14%;
  }
  .star-seven svg {
    left: 17%;
    top: 350px;
  }
  .star-eight svg {
    right: 11.5%;
    bottom: 360px;
  }
  .star-nine svg {
    left: 22%;
    bottom: 243px;
  }
  .star-ten svg {
    right: 25.8%;
    bottom: 194px;
  }
  .star-twelve svg {
    right: 13%;
  }
}
@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .star-seven svg {
    left: 13%;
  }
  .star-six svg {
    right: 12%;
  }
  .star-ten svg {
    right: 18%;
  }
}
</style>
