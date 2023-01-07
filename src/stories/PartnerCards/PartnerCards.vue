<template>
  <div class="container m-auto">
    <div
      v-if="windowWidth > 991"
      class="grid gap-5 overflow-hidden lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1"
    >
      <!-- v-bind="{ link: item?.company_site, image: item?.image }" -->
      <PartnerCard
        v-for="item in partners"
        :key="item"
        v-bind="{ link: item?.company_site, image: item?.photo_url }"
      />
    </div>
    <div v-else>
      <swiper
        :breakpoints="{
          375: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            cols: 1,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
            cols: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }"
        :modules="modules"
        :options="swiperOptions"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :slidesPerView="1"
      >
        <swiper-slide v-for="item in cards" :key="item" class="mb-[64px]">
          <PartnerCard
            v-bind="{ link: item?.company_site, image: item?.photo_url }"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, ref } from "vue";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import PartnerCard from "@/stories/PartnerCard/PartnerCard.vue";
import "swiper/css";
import "swiper/css/pagination";

export interface Props {
  image?: string;
  partners?: [];
}

withDefaults(defineProps<Props>(), {});

let windowWidth = ref(window.innerWidth);

const onWidthChange = () => (windowWidth.value = window.innerWidth);
onUnmounted(() => window.removeEventListener("resize", onWidthChange));

const modules = [Pagination];
</script>

<style></style>
