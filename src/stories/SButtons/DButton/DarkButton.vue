<template>
  <div class="group">
    <router-link
      v-if="moreIcon"
      :to="link"
      class="flex w-fit p-[10px] pl-[16px] items-center borders justify-center border-[1px] border-solid rounded-12 transition duration-500 ease-in-out backdrop-blur-xl cursor-pointer"
    >
      <p
        class="group-hover:bg-white linear-wipe lg:!leading-130 transition duration-500 ease-in-out leading-[16px] link text-base font-bold flex justify-center items-center lg:!text-base text-[13px] md:!text-base gap-x-[10px]"
        :class="customClassP"
      >
        {{ $t(title) }}
        <u-icons
          :name="btnIcon"
          class="text-white flex items-center -rotate-90"
        />
      </p>
    </router-link>
    <a
      v-else
      :class="customClass"
      download
      :href="downloadLink ? link : `tel:${link}`"
      class="flex py-[1px] md:py-0 w-fit px-[14px] sm:px-4 items-center borders justify-center border border-solid rounded-12 transition duration-500 ease-in-out backdrop-blur-xl cursor-pointer"
    >
      <p
        class="group-hover:bg-white linear-wipe lg:!leading-130 transition duration-500 ease-in-out leading-[16px] link text-base font-bold py-[10px] sm:py-[10px] lg:!pt-3 lg:!pb-3 flex justify-center items-center lg:!text-base text-[13px] md:!text-base gap-x-[23px] lg:!gap-x-[21px]"
      >
        {{ $t(title) }}
        <u-icons
          :name="btnIcon"
          class="text-white w-[16px] h-[16px] md:!w-[24px] md:!h-[24px] flex items-center"
        />
      </p>
    </a>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

export interface Props {
  title?: string;
  link?: string;
  icon?: string;
  btnIcon?: string;
  customClass?: string;
  customClassP?: string;
  downloadLink?: boolean;
  moreIcon?: boolean;
  showMore?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "Title",
  link: "https://google.com",
  customClass: "",
  customClassP: "",
  icon: "fsdfsdfs",
  btnIcon: "phone_icon",
  downloadLink: false,
  moreIcon: false,
  showMore: false,
});
</script>

<style scoped>
.link {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.borders {
  border-color: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.255167) 0%,
    #ffffff 40.62%,
    rgba(255, 255, 255, 0.21) 100%
  );
}
.linear-wipe {
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.255167) 0%,
    #ffffff 40.62%,
    rgba(255, 255, 255, 0.21) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  animation: shine 2s linear infinite;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
