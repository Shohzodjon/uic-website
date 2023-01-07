<template>
  <div class="clients-comment bg-[#141415] pt-11 pb-[45px] md:py-16">
    <div class="container relative">
      <div
        class="text-center section-title_green mb-9 md:mb-11"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {{ $t("comment.title") }}
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        class="relative mb-10 clients-swiper md:mb-0"
        v-bind="settings"
      >
        <swiper-slide v-for="(item, index) in about" :key="index">
          <clients-opinion-card
            v-bind="{
              img: item.photo_url,
              clientName: item.name,
              clientPosition: item.job,
              service: item.product_type,
              clientSite: item.product_name,
              clientComment: item.header,
              clientMoreComment: item.content,
              clientSiteLink: item.site_link,
            }"
          />
        </swiper-slide>
      </swiper>
      <div class="flex swiper_buttons">
        <button
          class="swiper-next-button swiper-button group absolute bottom-[10px] md:bottom-6 left-auto md:left-[70px] right-[25px] md:right-auto z-10 cursor-pointer"
          @click="next()"
          aria-label="button"
        >
          <u-icon
            class="text-[#00A795] md:text-[#fff] transition duration-300"
            name="gallerySliderRight"
          />
        </button>
        <button
          class="swiper-prev-button swiper-button absolute bottom-[10px] md:bottom-6 left-[26px] md:left-[0] z-10 group cursor-pointer"
          @click="prev()"
          aria-label="button"
        >
          <u-icon
            class="text-[#00A795] md:text-[#fff] transition duration-300"
            name="gallerySliderLeft"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ClientsOpinionCard from "@/stories/common/cards/ClientsOpinionCard.vue/ClientsOpinionCard.vue";
import UIcon from "@/stories/ui/UIcons/UIcons.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useReviewAbout } from "@/stores/reviewAbout";
import { computed, onMounted } from "vue";

const modules = [Pagination, Navigation, Autoplay];

const aboutStore = useReviewAbout();
const about = computed(() => aboutStore.mainReviewAbout);

useOnLanguageChange(() => {
  aboutStore.fetchMainRevieweAbout();
});

onMounted(() => {
  aboutStore.fetchMainRevieweAbout();
});
const settings = {
  loop: true,
  centeredSlides: true,
  pagination: {
    clickable: true,
  },
};

function next() {
  const swiper = document.querySelector(".clients-swiper").swiper;
  swiper.slideNext();
}

function prev() {
  const swiper = document.querySelector(".clients-swiper").swiper;
  swiper.slidePrev();
}
</script>

<style>
/* .clients-swiper .swiper-horizontal > .swiper-pagination-bullets,
.clients-swiper .swiper-pagination-bullets .swiper-pagination-horizontal,
.clients-swiper .swiper-pagination-custom,
.swiper-pagination-fraction {
  justify-content: flex-start !important;
} */
/* @media (max-width: 767px) {
  .clients-swiper .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px !important;
    left: 50% !important;
  }
}
@media (max-width: 766px) {
  .clients-swiper .swiper-pagination-bullets .swiper-pagination-horizontal {
    bottom: 0px;
    left: 50%;
    transform: translateX(-40%);
    justify-content: center;
    margin: 0 auto;
  }
}
@media (max-width: 500px) {
  .clients-swiper .swiper-pagination-bullets .swiper-pagination-horizontal {
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
  }
} */
</style>

<style>
.clients-comment .swiper-pagination {
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  width: max-content;
  justify-content: space-between;
}

.clients-comment .swiper-pagination-bullet-active {
  background: #fff !important;
  color: #fff !important;
  opacity: 1 !important;
  transition: 0.3;
}

.clients-comment .swiper-pagination-bullet {
  width: 41px;
  height: 2px;
  transition: 0.3;
  border-radius: 0px;
  background: gray;
  opacity: 0.2;
}

.swiper-button svg circle {
  transform: scale(0);
  transform-origin: center;
  transition: 0.3s ease-in-out;
}

.swiper-button:hover svg circle {
  transform: scale(1);
}

.swiper-button:hover svg path {
  fill: #00a795;
  transition: 0.3s ease-in-out;
}

@media (max-width: 767.9px) {
  .clients-comment .swiper-pagination {
    position: absolute;
    bottom: 0;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}
</style>
