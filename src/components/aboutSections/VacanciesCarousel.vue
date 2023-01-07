<template>
  <div class="mt-10">
    <div class="flex items-center justify-between mb-5">
      <h4 data-aos="fade-right" data-aos-duration="800" class="about__title">
        {{ $t("want_join_us") }}?
      </h4>
      <router-link
        data-aos="fade-left"
        data-aos-duration="800"
        to="/vacancy"
        class="text-[18px] font-medium leading-[130%] tracking-[0.002em] text-[#00A795] hover:text-[#049282] duration-300"
        >{{ $t("all_vacancies") }}</router-link
      >
    </div>
    <div class="relative">
      <div class="flex swiper_buttons">
        <button
          class="swiper-next-button swiper-button group absolute top-[190px] sm:top-[70px] left-auto right-[70px] sm:right-[25px] z-10 cursor-pointer"
          @click="next()"
          aria-label="button"
        >
          <u-icons
            class="text-[#00A795] md:text-[#fff] transition duration-300 hover:!text-[#00A795] hover:translate-x-[5px]"
            name="slider_right"
          />
        </button>
        <button
          class="swiper-prev-button swiper-button absolute top-[190px] sm:top-[70px] left-[70px] sm:left-[26px] md:left-[0] z-10 group cursor-pointer"
          @click="prev()"
          aria-label="button"
        >
          <u-icons
            class="text-[#00A795] md:text-[#fff] transition duration-300 hover:!text-[#00A795] hover:translate-x-[-5px]"
            name="slider_left"
          />
        </button>
      </div>
      <span
        class="slider-gradient slider-gradient_left absolute left-0 top-0 w-[50px] sm:w-[150px] md:w-[180px] h-full z-[3]"
      />
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :spaceBetween="10"
        :centered-slides="true"
        class="vacancy-slider h-[220px] sm:h-[200px]"
        v-bind="settings"
      >
        <swiper-slide v-for="(item, index) in vacancy" :key="index">
          <router-link
            :to="`/vacancy/${item.id}`"
            class="relative group bg-vacancy-card-background text-white p-3 sm:pt-5 sm:p-4 rounded-8 cursor-pointer block"
          >
            <span class="text-base sm:text-lg font-bold line-clamp-1">{{
              item.title
            }}</span>
            <hr class="my-3 sm:my-4 border-vacancy-card-divider" />
            <div class="flex flex-col justify-between gap-2 sm:flex-row">
              <div class="flex items-center">
                <div class="icon-bg">
                  <u-icons name="date" />
                </div>
                <span class="font-xs text-[13px] text-vacancy-card-icon-text">
                  {{ $t(date[item?.from_day]) }} -
                  {{ $t(date[item?.to_day] || "") }}
                </span>
              </div>
              <div class="flex items-center">
                <div class="icon-bg">
                  <u-icons name="time" />
                </div>
                <span class="font-xs text-[13px] text-vacancy-card-icon-text">
                  {{ item.from_clock }}
                  {{ item.to_clock }}
                </span>
              </div>
            </div>
            <div class="h-7"></div>
            <div class="absolute bottom-0 left-0 w-full px-3 translate-y-1/2">
              <div class="transition-colors footer">
                <div class="flex-1 py-0.5 px-2 flex items-center gap-2">
                  <u-icons
                    class="text-[#00A795] group-hover:text-white transition-colors"
                    name="money"
                  />
                  <span class="text-white text-[13px]">
                    {{ global.numberFunction(item.min_salary) }}
                    -
                    {{ global.numberFunction(item.max_salary) }}
                    USD
                  </span>
                </div>
                <button
                  class="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
                  aria-label="button"
                >
                  <u-icons name="arrowRight" />
                </button>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <span
        class="slider-gradient slider-gradient_right absolute right-0 top-0 w-[50px] sm:w-[150px] md:w-[180px] h-full z-[3]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper";
import "swiper/css";
import global from "@/plugins/global.ts";

import { useVacancyStore } from "@/stores/vacancy";
import { computed, onMounted, reactive, ref } from "vue";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useGlobalStore } from "@/stores/global";

import UIcons from "@/stories/ui/UIcons/UIcons.vue";

const date = reactive([
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]);
const size = ref(6);
const loading = ref(false);

const globalStore = useGlobalStore();
const vacancyStore = useVacancyStore();
const vacancy = computed(() => vacancyStore.mainVacancy);
onMounted(() => {
  vacancyStore.fetchMainVacancy(size.value).then(() => {
    globalStore.openLoad(loading);
  });
});

useOnLanguageChange(() => {
  vacancyStore.fetchMainVacancy(size.value);
});

const modules = [Autoplay];

const settings = {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  "grab-cursor": true,
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
};

function next() {
  const swiper = document.querySelector(".vacancy-slider").swiper;
  swiper.slideNext();
}

function prev() {
  const swiper = document.querySelector(".vacancy-slider").swiper;
  swiper.slidePrev();
}
</script>

<style scoped>
.icon-bg {
  @apply rounded-full bg-vacancy-card-icon-bg w-[20px] h-[20px] flex justify-center items-center mr-2;
}

.footer {
  @apply bg-vacancy-card-footer-bg rounded-8 flex items-center p-2
  border border-vacancy-card-footer-border border-solid
  group-hover:bg-vacancy-card-footer-bg-active
  group-hover:border-vacancy-card-footer-border-active;
}
.slider-gradient_left {
  background: linear-gradient(90deg, #1e1e20 0%, rgba(30, 30, 32, 0) 100%);
}
.slider-gradient_right {
  background: linear-gradient(90deg, rgba(30, 30, 32, 0) 0%, #1e1e20 100%);
}
</style>
<style>
.vacancy-slider {
  height: 200px;
}
@media (max-width: 576px) {
  .vacancy-slider {
    height: 250px;
  }
}
</style>
