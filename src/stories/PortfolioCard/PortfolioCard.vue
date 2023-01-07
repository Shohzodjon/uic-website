<template>
  <div class="">
    <div class="portfos">
      <a
        v-for="(item, index) in cards"
        target="_blank"
        :key="index"
        data-aos="fade-right"
        :data-aos-duration="`${index + 9}00`"
        :href="item?.site_link || '/'"
        class="relative z-10 p-1 cursor-pointer rounded-12 portfos__box group bg-img"
        :class="{
          _big: small
            ? index == 0 || index == 6
            : (index % 18) % 7 == 0 || (index % 18) % 7 == 6,
        }"
        aria-label="link"
      >
        <div
          :class="
            index == 0 || index == 6
              ? 'max-w-[584px] overflow-hidden'
              : 'max-w-[280px] '
          "
          class="rounded-12"
        >
          <div class="md:pt-6 pt-2 rounded-12 md:px-6 px-2 pb-[54px]">
            <div
              :class="
                index == 0 || index == 6
                  ? 'lg:text-[38px] lg:leading-[45px] lg:mb-2'
                  : 'lg:text-2xl lg:leading-[49px] lg:mb-[6px]'
              "
              class="!leading-[120%] text-white text-[18px] md:text-2xl sm:leading-[22px] font-bold !mb-1 line-clamp-3"
            >
              {{ item?.title }}
            </div>
            <p
              class="text-xs font-semibold leading-3 uppercase text-gray lg::text-sm sm:leading-5"
            >
              {{ item?.slug }}
            </p>
          </div>
          <img
            :src="item?.image_url"
            alt="Portfolio image"
            class="absolute top-0 -z-[4] left-0 right-0 bottom-0 w-full h-full object-cover"
          />
          <div
            class="group-hover:translate-x-[24px] sm:group-hover:opacity-100 absolute bottom-6 right-12 -translate-x-[70px] flex items-center gap-5 opacity-0 transition duration-300"
          >
            <p
              :class="index == 0 || index == 6 ? 'block' : 'hidden'"
              class="text-sm font-bold text-white uppercase leading-120"
            >
              {{ $t("View case") }}
            </p>
            <UIcons class="text-white rightArrowWhite" name="whiteArrowRight" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
export interface Props {
  cards: Array<object>;
  small: boolean;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.portfos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  justify-items: stretch;
  align-items: stretch;
  gap: 24px;
}

.portfos__box._big {
  grid-row: auto/span 2;
  grid-column: auto/span 2;
}

@media (max-width: 576px) {
  .portfos {
    gap: 16px;
  }

  .portfos__box._big {
    grid-row: 1;
    grid-column: 1;
  }
}

.rightArrowWhite svg g path {
  stroke: white !important;
}
.bg-img {
  overflow: hidden;
}
.bg-img::after,
.bg-img::before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  border-radius: 5px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
  border-radius: 0;
}

.bg-img::after {
  background: linear-gradient(
    160.09deg,
    #141415 -12.64%,
    rgba(0, 0, 0, 0.7) -80%,
    rgba(20, 20, 21, 0.2) 94.29%
  );
  width: 100%;
  height: 100%;
  opacity: 1;
}

.bg-img:hover::after,
.bg-img::before {
  opacity: 0;
}

.bg-img:hover::before {
  background: linear-gradient(
      325.56deg,
      #00a795 -22.1%,
      rgba(0, 167, 149, 0.96875) -0.69%,
      rgba(0, 167, 149, 0) 33.13%
    ),
    linear-gradient(
      160.3deg,
      #00a795 -16.93%,
      rgba(0, 167, 149, 0.96875) -7.7%,
      rgba(0, 167, 149, 0) 48.72%
    );
  width: 100%;
  height: 100%;
  opacity: 1;
}
</style>
