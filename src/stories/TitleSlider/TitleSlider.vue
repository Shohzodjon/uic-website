<template>
  <div class="container !sm:px-[15px] !px-0 relative">
    <swiper
      class="relative services-slider"
      :slides-per-view="1"
      v-bind="settings"
      :spaceBetween="20"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :pagination="{
        clickable: true,
      }"
      :slidesPerView="1"
      :modules="modules"
    >
      <swiper-slide v-for="(item, index) in cards" :key="index">
        <MediumTitle class="w-full md:mb-[95px]" :title="item.text" />
        <div
          class="flex flex-col items-center px-4 md:items-end lg:px-0 mt-28 md:mt-0"
        >
          <p
            class="font-normal mb-8 max-w-[485px] text-base leading-140 tracking-[0.2px] text-[#E0E0E099] line-clamp-2"
          >
            {{ $t(item?.desc || "") }}
          </p>
          <div class="flex gap-2 text-left services-buttons sm:gap-4 lg:mr-2">
            <router-link
              class="s-button rounded-8"
              :to="{ name: 'PPortfolio' }"
            >
              <SButton class="" text="buttons.btn1" />
            </router-link>
            <dark-button
              class="dark-button"
              v-bind="{
                title: $t('buttons.btn4'),
                downloadLink: true,
                link: brandbook?.file_url,
                btnIcon: 'download_icon',
              }"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper__btns">
      <button
        class="swiper-next group absolute top-[164px] md:top-[56px] right-0 sm:right-[26px] md:right-[0px] z-10 cursor-pointer"
        aria-label="button"
      >
        <u-icon
          name="gallerySliderRight"
          class="text-[#00A795] md:text-[#fff] transition duration-300"
        />
      </button>
      <button
        class="swiper-prev absolute top-[164px] md:top-[56px] left-0 sm:left-[26px] md:left-[0] z-10 group cursor-pointer"
        aria-label="button"
      >
        <u-icon
          name="gallerySliderLeft"
          class="text-[#00A795] md:text-[#fff] transition duration-300"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import MediumTitle from "@/stories/MediumTitle/MediumTitle.vue";
import UIcon from "@/stories/ui/UIcons/UIcons.vue";
import DarkButton from "@/stories/SButtons/DButton/DarkButton.vue";
import SButton from "@/components/Button/SButton.vue";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Pagination, Navigation, Autoplay];
const settings = {
  loop: true,
  centeredSlides: true,
};

export interface Props {
  title?: string;
  subtitle?: string;
  cards?: Array<object>;
  brandbook?: Array<object>;
}

withDefaults(defineProps<Props>(), {
  title: "",
  subtitle: "",
});
</script>

<style>
@media (max-width: 415px) {
  .services-buttons .s-button {
    font-size: 14px !important;
    padding-left: 6px !important;
    padding-right: 6px !important;
    white-space: nowrap;
  }
  .services-buttons .dark-button p {
    font-size: 13px !important;
    white-space: nowrap;
  }
  .services-buttons .dark-button a {
    padding-left: 6px !important;
    padding-right: 6px !important;
    font-size: 15px !important;
    white-space: nowrap;
  }
}
.services-slider .swiper-horizontal > .swiper-pagination-bullets,
.services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
.services-slider .swiper-pagination-custom,
.services-slider .swiper-pagination-fraction {
  justify-content: flex-start !important;
  bottom: 130px;
}

@media (max-width: 2550px) {
  .services-slider .swiper-horizontal > .swiper-pagination-bullets,
  .services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
  .services-slider .swiper-pagination-custom,
  .services-slider .swiper-pagination-fraction {
    left: 1%;
  }
}
@media (max-width: 767px) {
  .services-slider .swiper-horizontal > .swiper-pagination-bullets,
  .services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
  .services-slider .swiper-pagination-custom,
  .services-slider .swiper-pagination-fraction {
    bottom: 51.3%;
    left: 30%;
  }
}

@media (max-width: 500px) {
  .services-slider .swiper-horizontal > .swiper-pagination-bullets,
  .services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
  .services-slider .swiper-pagination-custom,
  .services-slider .swiper-pagination-fraction {
    bottom: 51.5%;
    left: 23%;
  }
}

@media (max-width: 405px) {
  .services-slider .swiper-horizontal > .swiper-pagination-bullets,
  .services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
  .services-slider .swiper-pagination-custom,
  .services-slider .swiper-pagination-fraction {
    bottom: 51.6%;
    left: 20%;
  }
}
@media (max-width: 389px) {
  .services-slider .swiper-horizontal > .swiper-pagination-bullets,
  .services-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
  .services-slider .swiper-pagination-custom,
  .services-slider .swiper-pagination-fraction {
    bottom: 51.5%;
    left: 18.5%;
  }
}
</style>

<style scoped>
.services-slider .dark-button {
  line-height: 18px;
}
.services-slider .swiper-pagination {
  bottom: 93px !important;
  left: -475px !important;
}
@media (max-width: 1230px) {
  .services-slider .swiper-pagination {
    left: -300px !important;
  }
}
@media (max-width: 950px) {
  .services-slider .swiper-pagination {
    left: -250px !important;
  }
}
@media (max-width: 815px) {
  .services-slider .swiper-pagination {
    left: 0px !important;
    bottom: auto;
    top: 180px;
  }
}
@media (max-width: 768px) {
  .services-slider .swiper__btns svg {
    width: 65px;
    height: 65px;
  }
  .services-slider .swiper__btns button:hover svg circle {
    transform: scale(0);
  }
}
</style>
