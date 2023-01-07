<template>
  <router-link :to="link" style="-webkit-user-drag: none">
    <div class="cursor-pointer galeryCard">
      <div>
        <div
          class="overflow-hidden rounded-[10px] xs:!rounded-2xl xs:mb-4 md:!mb-[18px] mb-[18px] image transition duration-300 ease-in-out rounded-2"
        >
          <img
            :src="img"
            alt="Galery card image"
            class="rounded-lg w-full h-[200px] object-cover transition duration-300 ease-in-out"
          />
        </div>
        <span
          v-if="count"
          class="border-[#FFFF] border-1 transition duration-300 ease-in-out px-2 py-1 translate-y-[-55px] translate-x-[12px] rounded-lg bg-[#FFFFFF2E] absolute"
          ><p
            class="text-[#FFFFFF] flex items-center justify-center gap-x-1 text-base font-bold leading-[130%]"
          >
            {{ count }}
            <img
              class="w-4 h-4"
              src="@/assets/svg/icon-img.png"
              alt="icon"
            /></p
        ></span>
      </div>
      <div class="overflow-hidden" v-if="desc">
        <p
          class="font-bold text-white leading-[130%] w-[280px] line-clamp-2 xs:text-[15px] md:!text-[16px] px-5 sm:px-0"
        >
          {{ desc }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
export interface Props {
  desc?: string;
  img?: string;
  count?: number;
  link?: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.image {
  position: relative;
  width: 100%;
  transition: all 300ms ease-in-out;
}

.image::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 167, 149, 0.28);
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
</style>
