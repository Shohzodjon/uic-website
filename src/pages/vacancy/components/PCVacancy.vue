<template>
  <router-link
    data-aos-duration="1500"
    data-aos="fade-right"
    v-for="(item, i) in vacancy"
    :key="i"
    :to="`/vacancy/${item.id}`"
    class="relative px-3 py-3 text-white cursor-pointer group bg-vacancy-card-background md:py-6 md:px-7 rounded-8"
  >
    <span class="text-lg font-bold line-clamp-1">{{ item?.title }}</span>
    <hr class="my-4 border-vacancy-card-divider" />
    <div class="flex flex-col justify-between gap-2 sm:flex-row">
      <div class="flex items-center">
        <div class="icon-bg">
          <u-icons name="date" />
        </div>
        <span
          class="font-xs text-[13px] text-vacancy-card-icon-text uppercase font-medium"
        >
          {{ $t(date[item?.from_day]) }} -
          {{ $t(date[item?.to_day]) }}
        </span>
      </div>
      <div class="flex items-center">
        <div class="icon-bg">
          <u-icons name="time" />
        </div>
        <span class="font-xs text-[13px] text-vacancy-card-icon-text">
          {{ item?.from_clock }} - {{ item?.to_clock }}
        </span>
      </div>
    </div>
    <div class="h-5"></div>
    <div class="absolute bottom-0 left-0 w-full px-3 translate-y-1/2">
      <div class="transition-colors footer">
        <div class="flex-1 py-0.5 px-2 flex items-center gap-2">
          <u-icons
            class="text-[#00A795] group-hover:text-white transition-colors"
            name="money"
          />
          <span class="font-bold text-white text-[14px] md:text-[18px]">
            {{ global.numberFunction(item?.min_salary) }} -
            {{ global.numberFunction(item?.max_salary) }} USD
          </span>
        </div>
        <button
          class="bg-[#00A795] group-hover:bg-[#FFFFFF47] transition-colors h-[24px] w-[24px] rounded-full"
          aria-label="button"
        >
          <u-icons name="arrowRight" />
        </button>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { reactive } from "vue";
import global from "@/plugins/global.ts";

export interface Props {
  vacancy: Array<object>;
}

const date = reactive([
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
]);

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.icon-bg {
  @apply rounded-full bg-vacancy-card-icon-bg w-[20px] h-[20px] flex justify-center items-center mr-2;
}

.footer {
  @apply bg-vacancy-card-footer-bg rounded-8 flex items-center p-2
    border border-vacancy-card-footer-border border-solid
    group-hover:bg-vacancy-card-footer-bg-active
    group-hover:border-vacancy-card-footer-border-active;
}
</style>
