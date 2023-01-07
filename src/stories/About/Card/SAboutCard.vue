<template>
  <Transition data-aos="fade-up">
    <div class="transition duration-700 ease-in-out AboutCard">
      <swiper
        :allowTouchMove="false"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        :class="customClass ? customClass : ''"
        class="swiper !w-[283px] h-[450px] rounded-12 transition duration-700 ease-in-out z-10"
        slides-per-view="auto"
      >
        <swiper-slide
          v-for="item in aboutCard"
          :key="item"
          class="relative cursor-pointer group rounded-12"
          @click="isModalOpen = true"
        >
          <img
            v-lazy="{ src: item.photo, delay: 500 }"
            alt="AboutSliderCard"
            class="object-cover object-center w-full h-full group- rounded-12"
          />
          <div
            class="transition duration-300 opacity-0 group-hover:opacity-100 gradient-background rounded-[12px]"
          >
            <UIcons
              class="text-white absolute top-[50%] left-[45%]"
              name="arrowExpand"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </Transition>
  <Transition>
    <div
      v-if="isModalOpen"
      class="openedModal flex fixed items-center justify-center left-0 top-0 w-full h-full bg-[#000000cc]"
    >
      <div class="relative flex items-center justify-center w-full h-full">
        <div class="absolute w-full h-full" @click="modalClose"></div>
        <swiper
          :allowTouchMove="false"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :modules="modules"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
          :options="swiperOptions"
          class="!w-[500px] !h-[90vh] rounded-12 transition duration-700 ease-in-out z-10"
        >
          <swiper-slide
            v-for="(item, index) in aboutCard"
            :key="index"
            class="cursor-pointer"
          >
            <img
              :src="item.photo"
              alt="AboutSliderCard"
              class="object-cover object-center w-full h-full"
            />
          </swiper-slide>
        </swiper>
        <div class="">
          <div
            class="swiper-prev absolute top-[45%] cursor-pointer left-[13%] rotate-180"
          >
            <UIcons
              class="text-white rotate-180 hover:text-[#00A795] duration-300"
              name="arrow"
            />
          </div>
          <div
            class="swiper-next top-[45%] cursor-pointer right-[13%] absolute"
          >
            <UIcons
              class="text-white rotate-180 hover:text-[#00A795] duration-300"
              name="arrow"
            />
          </div>
        </div>
        <!-- <button
            @click="modalClose"
            class="hover:translate-y-[-3px] hover:border-[#971837] transition duration-300 nextEl w-[44px] h-[44px] flex items-center justify-center border-[2px] border-solid border-[#e4dddd52] rounded-full absolute top-[50%] right-0 z-[9999]"
          ></button> -->
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { ref, watch } from "vue";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/navigation";

export interface Props {
  aboutCard: Array<object>;
  customClass: string;
}

const swiperOptions = {
  slidesPerView: 3,
  allowTouchMove: false,
  navigation: {},
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Autoplay, Navigation],
};
const modules = [Autoplay, Navigation];

withDefaults(defineProps<Props>(), {
  aboutCard: null,
});

let isModalOpen = ref(false);

const modalClose = () => {
  isModalOpen.value = false;
};
watch(isModalOpen, (currentValue) => {
  const element = document.body;
  if (currentValue) {
    element.classList.toggle("!overflow-y-hidden");
  } else {
    element.classList.remove("!overflow-y-hidden");
  }
});
</script>

<style>
.openedModal .swiper-wrapper {
  gap: 0 !important;
}
.AboutCard .swiper-wrapper {
  gap: 0 !important;
}
</style>
<style scoped>
.openedModal {
  z-index: 2000;
}

.gradient-background {
  background: linear-gradient(
    0deg,
    rgba(0, 167, 149, 0.28),
    rgba(0, 167, 149, 0.28)
  );
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}

.swiper > .swiper-button-prev,
.swiper > .swiper-button-next {
  display: none;
}

.AboutCard:hover {
  opacity: 1;
  transition: all 400ms ease-in-out;
}

.AboutCard .image {
  transition: all 400ms ease-in-out;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 400ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
