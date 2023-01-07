<template>
  <div class="container sm:px-[15px] !px-0">
    <div
      class="sm:rounded-[24px] sm:max-w-[1194px] w-full relative sm:bg-[#252527] sm:border-[#37373A] border-solid sm:border-[1px] sm:px-8 pt-8 pb-10"
    >
      <div
        style="
          width: 180px;
          background: linear-gradient(
            90deg,
            #252527 0%,
            rgba(37, 37, 39, 0) 100%
          );
          position: absolute;
          top: 21px;
          left: 28px;
          z-index: 2;
          height: 80%;
        "
      ></div>
      <swiper
        class="relative"
        :spaceBetween="20"
        :loop="true"
        :centeredSlides="true"
        :navigation="{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          375: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
            cols: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4.5,
            spaceBetween: 12,
          },
        }"
        :modules="modules"
      >
        <swiper-slide>
          <a :href="link" aria-label="link">
            <div class="galeryCard cursor-pointer">
              <div>
                <div
                  class="overflow-hidden rounded-[10px] xs:!rounded-2xl xs:mb-4 md:!mb-[18px] mb-[18px] image transition duration-300 ease-in-out rounded-2"
                >
                  <img
                    :src="image"
                    alt="Galery card image"
                    class="rounded-lg w-full h-[200px] transition duration-300 ease-in-out"
                  />
                </div>
                <span
                  class="border-[#FFFF] border-1 transition duration-300 ease-in-out px-2 py-1 translate-y-[-55px] translate-x-[12px] rounded-lg bg-[#FFFFFF2E] absolute"
                  ><p
                    class="text-[#FFFFFF] flex items-center justify-center gap-x-1 text-base font-bold leading-[130%]"
                  >
                    {{ count }}
                    <Icons name="galery" class="w-4 h-4" /></p
                ></span>
              </div>
              <div>
                <p
                  class="font-bold text-white leading-[130%] line-clamp-2 xs:text-[15px] md:!text-[16px]"
                >
                  {{ desc }}
                </p>
              </div>
            </div>
          </a>
        </swiper-slide>
        <div class="sm:mb-[60px] md:mb-[40px] mb-[84px]"></div>
      </swiper>
      <div class="swiper-next group rotate-180">
        <u-icons
          name="arrow"
          class="text-white group-hover:text-[#00a795] transition duration-300"
        />
      </div>
      <div class="swiper-prev group">
        <u-icons
          name="arrow"
          class="text-white group-hover:text-[#00a795] transition duration-300"
        />
      </div>
      <div
        style="
          width: 180px;
          background: linear-gradient(
            90deg,
            #252527 0%,
            rgba(37, 37, 39, 0) 100%
          );
          top: 21px;
          rotate: 180deg;
          right: 28px;
          z-index: 2;
          position: absolute;
          height: 80%;
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Pagination, Navigation];

export interface Props {
  desc: string;
  image: string;
  count: number;
  link: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style>
.image {
  position: relative;
  width: 100%;
  transition: all 300ms ease-in-out;
}

.galeryCard:hover .image:before {
  opacity: 1;
  transition: all 300ms ease-in-out;
}

.galeryCard:hover span {
  transition: all 300ms ease-in-out;
  background-color: #00a795;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 !important;
  transition: 0.3;
}

.swiper-pagination-bullet-active {
  background: #fff !important;
  color: #fff !important;
  opacity: 1 !important;
  transition: 0.3;
}
.swiper-pagination-bullet {
  width: 41px;
  height: 2px;
  transition: 0.3;
  border-radius: 0px;
  background: gray;
  opacity: 0.2;
}

.swiper-next,
.swiper-prev {
  top: 94px;
  z-index: 10;
  transition: 0.3s;
  position: absolute;
}

.swiper-prev:hover::after,
.swiper-next:hover::after {
  content: "";
  transform: scale(1);
  opacity: 1;
  transition: all 0.2s;
}

.swiper-prev:after,
.swiper-next::after {
  content: "";
  position: absolute;
  top: -13px;
  left: -11px;
  width: 48px;
  height: 48px;
  border: 1px solid hsla(0, 0%, 100%, 0.8);
  border-radius: 50%;
  transform: scale(0);
  opacity: 0;
  transition: all 0.2s;
}

@media only screen and (max-width: 425px) {
  .swiper-next,
  .swiper-prev {
    display: none;
  }
}

.swiper-prev {
  left: 33px !important;
}

.swiper-next {
  right: 33px !important;
}
</style>
