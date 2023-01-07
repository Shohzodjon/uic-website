<template>
  <div class="group" :class="customClassGroup">
    <router-link
      v-if="link"
      :to="link"
      class="flex w-full pr-4 pl-8 items-center justify-center rounded-12 transition duration-500 ease-in-out bg-[#00A795] cursor-pointer"
      :class="customClass"
    >
      <p
        class="text-white sm:text-base lg:!leading-130 leading-[16px] font-bold py-[10px] sm:py-[10px] lg:!pt-[13px] lg:!pb-[14px] flex justify-center items-center lg:!text-[16px] text-[13px] md:!text-[16px] gap-x-[10px] lg:!gap-x-[24px]"
      >
        {{ $t(title) }}
        <u-icons
          class="transition duration-500 ease-in-out group-hover:rotate-45 w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] flex items-center"
          :class="customIconClass"
          :name="icon"
        />
      </p>
    </router-link>
    <div
      v-else
      class="flex w-full pr-4 pl-8 items-center justify-center rounded-12 transition duration-500 ease-in-out bg-[#00A795] cursor-pointer"
      :class="customClass"
    >
      <p
        class="text-white sm:text-base lg:!leading-130 leading-[16px] font-bold py-[10px] sm:py-[10px] lg:!pt-[13px] lg:!pb-[14px] flex justify-center items-center lg:!text-[16px] text-[13px] md:!text-[16px] gap-x-[10px] lg:!gap-x-[24px]"
      >
        {{ $t(title) }}
        <u-icons
          class="transition duration-500 ease-in-out group-hover:rotate-45 w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] flex items-center"
          :class="customIconClass"
          :name="icon"
        />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

export interface Props {
  title?: string;
  link?: string;
  icon?: string;
  customClass?: string;
  customIconClass?: string;
  customClassGroup?: string;
}
withDefaults(defineProps<Props>(), {
  title: "Title",
  icon: "arrow_right",
  customClass: "",
  customIconClass: "",
});
</script>
