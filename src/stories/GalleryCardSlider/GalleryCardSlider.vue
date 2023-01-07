<template>
  <div
    class="gallerySwiper md:bg-[#252527] relative rounded-[24px] md:p-[32px]"
    :class="
      galleryProps
        ? 'gallerySwiper_gallery md:pb-[10px]'
        : sliderClass === 'sliderVideo' && videoProps?.length >= 3
        ? 'height_max'
        : 'height_min'
    "
  >
    <h6
      v-if="title"
      data-aos="fade-uop"
      data-aos-duration="800"
      class="text-[20px] font-bold leading-[130%]"
    >
      {{ $t(title || "") }}
    </h6>
    <p
      v-if="desc"
      class="mt-3 about_text"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t(desc || "") }}
    </p>
    <div
      class="hidden swiper__btns md:block"
      :class="
        sliderClass === 'sliderVideo' && videoProps?.length <= 3
          ? '!hidden'
          : ''
      "
    >
      <button
        class="absolute text-[#fff] z-10 left-[20px]"
        :class="
          galleryProps
            ? 'bottom-[125px]'
            : videoProps
            ? 'top-[245px]'
            : 'top-[100px]'
        "
        @click="prevS()"
        aria-label="button"
      >
        <u-icons name="gallerySliderLeft" />
      </button>
      <button
        class="absolute text-[#fff] z-10 right-[20px]"
        :class="
          galleryProps
            ? 'bottom-[125px]'
            : videoProps
            ? 'top-[245px]'
            : 'top-[100px]'
        "
        @click="nextS()"
        aria-label="button"
      >
        <u-icons name="gallerySliderRight" />
      </button>
    </div>
    <swiper
      :modules="modules"
      :pagination="{
        clickable: true,
      }"
      :centered-slides="true"
      :slides-per-view="videoProps ? 3 : 4"
      :spaceBetween="20"
      class="gallerySwiper-slider"
      :class="sliderClass ? `mt-[0px]  + ${sliderClass}` : ''"
      v-bind="settings"
    >
      <swiper-slide
        v-for="(item, index) in galleryProps
          ? galleryProps
          : videoProps
          ? videoProps
          : photogallery"
        :key="index"
      >
        <a
          :href="item.link"
          v-if="videoProps"
          target="_blank"
          class="flex relative rounded-[10px] mt-7"
          :class="props.videoProps?.length == 1 ? 'w-[280px]' : 'w-auto'"
        >
          <img
            :src="item.img"
            alt="birthday img"
            class="w-full h-[199px] rounded-[10px] object-cover"
          />
          <div
            class="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] flex flex-col items-center justify-center bg-[#1E1E207A] hover:bg-[#00A79547] duration-300"
          >
            <u-icons name="play_icon" />
          </div>
        </a>
        <div
          @click="showImg(index, item)"
          v-else-if="galleryProps"
          class="flex relative rounded-[10px] mt-7 cursor-pointer"
        >
          <img
            :src="item"
            alt="about UIC"
            class="w-full h-[199px] rounded-[10px] object-cover"
          />
          <div
            class="absolute w-full left-0 right-0 bottom-0 top-0 rounded-[10px] hover:bg-[#00A79547] duration-300"
          ></div>
        </div>
        <GalleryCard
          v-else
          v-bind="{
            link: '/gallery/' + item?.slug || '',
            img: item.main_photo_url,
            count: item?.count,
            desc: item?.title,
          }"
        />
      </swiper-slide>
    </swiper>

    <vue-easy-lightbox
      :imgs="galleryProps"
      :index="index"
      :visible="visible"
      @hide="handleHide"
      :maxZoom="2"
      :moveDisabled="false"
    >
      <template v-slot:prev-btn="{ prev }">
        <button @click="prev" class="lightbox--prev" aria-label="button">
          <UIcons name="lightbox_arrow_right" />
        </button>
      </template>
      <template v-slot:next-btn="{ next }">
        <button @click="next" class="lightbox--next" aria-label="button">
          <UIcons name="lightbox_arrow_left" />
        </button>
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, defineProps, ref } from "vue";
import GalleryCard from "/src/stories/GaleryCard/GaleryCard.vue";
import { useGalleryStore } from "@/stores/gallery";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import useOnLanguageChange from "@/composables/useOnLanguageChange";

// LIGHTBOX
const visible = ref(false);
const index = ref();

const showImg = (i: number) => {
  index.value = i;
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};

const galleryStore = useGalleryStore();
const photogallery = computed(() => galleryStore.mainPhotogallery);

useOnLanguageChange(() => {
  galleryStore.fetchPhotogallery();
});

onMounted(() => {
  galleryStore.fetchPhotogallery();
});

export interface Props {
  galleryProps?: Array<any>;
  videoProps?: Array<any>;
  title?: string;
  desc?: string;
  sliderClass?: string;
}

const props = defineProps<Props>();

// withDefaults(defineProps<Props>(), {});

const isSingleVideo = computed(() => {
  if (props.videoProps?.length && props.videoProps?.length <= 3) return true;
  else return false;
});

const modules = [Pagination, Autoplay];
const settings = {
  loop: false,
  // loop: isSingleVideo.value && window?.innerWidth > 720 ? false : true,
  centeredSlides: false,
  // centeredSlides: isSingleVideo.value ? false : true,
  autoplay: isSingleVideo.value
    ? false
    : {
        delay: 2000,
        disableOnInteraction: false,
      },
  "grab-cursor": true,
  breakpoints: {
    300: {
      slidesPerView: isSingleVideo.value ? props.videoProps?.length : 3,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
};

function nextS() {
  const swiperEl = document.querySelector(
    `.${props.sliderClass}` || ".gallerySwiper-slider"
  );
  if (swiperEl) {
    swiperEl.swiper.slideNext();
  }
}

function prevS() {
  const swiperEl = document.querySelector(
    `.${props.sliderClass}` || ".gallerySwiper-slider"
  );
  if (swiperEl) {
    swiperEl.swiper.slidePrev();
  }
}
</script>

<style scoped>
.gallerySwiper .swiper:before {
  content: "";
  position: absolute;
  left: -8px;
  top: 0;
  width: 180px;
  height: 259px;
  background: linear-gradient(90deg, #252527 0%, rgba(37, 37, 39, 0) 100%);
  z-index: 6;
}

.gallerySwiper .swiper:after {
  content: "";
  position: absolute;
  right: -2px;
  top: 0;
  width: 180px;
  height: 259px;
  background: linear-gradient(90deg, rgba(37, 37, 39, 0) 0%, #252527 100%);
  z-index: 6;
}

@media (max-width: 820px) {
  .gallerySwiper .swiper:before {
    display: none;
  }

  .gallerySwiper .swiper:after {
    display: none;
  }
}
</style>

<style>
.gallerySwiper .swiper {
  height: 350px;
}
.gallerySwiper_gallery .swiper {
  height: 260px;
}
.gallerySwiper.height_min {
  height: 400px;
}

.gallerySwiper .swiper-slide-active {
  height: 700px;
}

.video-slider .swiper-slide {
  height: 250px !important;
}
.video-slider .swiper-pagination {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.2);
  width: 254px;
  height: 2px;
}
.video-slider .swiper-pagination-bullet {
  height: 2px !important;
  display: block !important;
  width: 41px !important;
}
.video-slider .swiper-pagination-bullet-active {
  background: #fff !important;
}
/* only-child */
.video-slider.swiper {
  height: 250px !important;
}
.swiper-pagination-bullet:only-child {
  display: block;
}

.gallerySwiper_gallery .swiper-pagination {
  bottom: 3px !important;
  z-index: 999;
}
.swiper-pagination-bullet {
  height: 2px;
}
.gallerySwiper-slider .swiper-pagination-bullet-active {
  background: #fff !important;
}
.swiper__btns svg circle {
  transform: scale(0);
  transform-origin: center;
  transition: 0.3s ease-in-out;
}

.swiper__btns button:hover svg circle {
  transform: scale(1);
}

.swiper__btns button:hover svg path {
  fill: #00a795;
  transition: 0.3s ease-in-out;
}

@media (max-width: 540px) {
  .gallerySwiper-slider .swiper-slide {
    width: 250px !important;
  }
}
.gallerySwiper .swiper-pagination-bullet {
  background-color: #515152;
  margin: 0;
  width: 41px;
  border-radius: 0;
}
.gallerySwiper .swiper-pagination-bullet .swiper-pagination-bullet-active {
  background-color: #fff;
}
.gallerySwiper .swiper-pagination-bullet {
  margin: 0 !important;
}

.lightbox--prev,
.lightbox--next {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: rotateY(180deg);
}
.lightbox--next {
  right: 10%;
}
.lightbox--prev {
  left: 10%;
}
.gallerySwiper .vel-modal {
  background: linear-gradient(180deg, rgba(30, 30, 32, 0.8) 0%, #1e1e20 100%);
  backdrop-filter: blur(8px);
}
.gallerySwiper .btn__close {
  top: 10%;
  right: 10%;
}
.gallerySwiper .btn__next {
  display: none;
}
.gallerySwiper .btn__prev {
  display: none;
}
.gallerySwiper .vel-toolbar {
  display: none;
}

.vel-img {
  width: 586px;
  /*height: 417px;*/
  border-radius: 12px;
  pointer-events: none;
}
@media (max-width: 767px) {
  .vel-img {
    width: auto;
    height: auto;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 15%;
  }
  .lightbox--next {
    top: 75%;
    right: 8%;
    z-index: 10000;
  }
  .lightbox--prev {
    top: 75%;
    left: 8%;
    z-index: 10000;
  }
}
@media screen and (min-width: 980px) and (max-width: 1059.9px) {
  .gallery-post-wrap {
    max-width: 955px;
    width: 950px;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 10%;
  }
  .lightbox--next {
    right: 15%;
  }
  .lightbox--prev {
    left: 15%;
  }
}
@media screen and (min-width: 1060px) and (max-width: 1199.9px) {
  .gallery-post-wrap {
    max-width: 991px;
    width: 990px !important;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 15%;
  }
  .lightbox--next {
    right: 15%;
  }
  .lightbox--prev {
    left: 15%;
  }
}
@media screen and (min-width: 1200px) {
  .gallery-post-wrap {
    width: 100%;
    left: 10%;
    width: 990px;
  }
  .photogallery--wrap .btn__close {
    top: 7%;
    right: 15%;
  }
  .lightbox--next {
    right: 20%;
  }
  .lightbox--prev {
    left: 20%;
  }
}

.vti__dropdown {
  padding: 16px !important;
  border-radius: 8px 0 0 8px;
  transition: 0.3s ease-in-out;
}
.vti__dropdown:hover {
  /*padding: 13px !important;*/
  background-color: #2e2e30;
}
.vti__input {
  color: #fff;
  background-color: #141415;
  border-radius: 0 8px 8px 0;
}
.vue-tel-input {
  border: none;
  border-radius: 8px;
  background-color: #141415;
}
.vue-tel-input:hover .vue-tel-input:focus-within {
  box-shadow: none;
  border-color: #00a795;
}

.vti__dropdown-list {
  max-width: 300px !important;
  top: 45px !important;
  z-index: 12;
  border-radius: 8px;
  background-color: #141415;
  border: none;
}

.vti__dropdown-item.highlighted {
  background-color: #5f5f5f;
}
.vue-tel-input:focus-within {
  box-shadow: inset 0 1px 1px #00000013, 0 0 3px #00a795 !important;
  border-color: #00a795 !important;
}
.vue-tel-input {
  border: 1px solid transparent;
}
.vue-tel-input._phone-error {
  border: 1px solid red;
}

.vti__dropdown-item strong,
.vti__dropdown-item span {
  color: white;
  opacity: 0.7;
}
</style>
