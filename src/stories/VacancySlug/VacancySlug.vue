<template>
  <div
    class="px-3 py-3 text-white cursor-pointer bg-vacancy-card-background lg:py-10 md:py-9 md:px-11 lg:px-12 rounded-8"
  >
    <h1
      class="font-bold sm:text-2xl text-lg md:text-3xl lg:text-[40px] leading-120"
    >
      {{ vacancyId.title }}
    </h1>
    <hr class="mt-3 mb-[15px] lg:my-6 md:my-5 border-vacancy-card-divider" />
    <div class="flex flex-wrap gap-6 lg:gap-12 md:gap-10">
      <div class="hidden gap-4 sm:flex">
        <ShareNetwork
          class="tg newsSingleBlock__link"
          network="facebook"
          :url="`https://uic.group/vacancy/${vacancyId.id}`"
          :title="vacancyId.title"
        >
          <u-icons
            class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
            name="vacancy_facebook"
          /> </ShareNetwork
        ><ShareNetwork
          class="tg newsSingleBlock__link"
          network="twitter"
          :url="`https://uic.group/vacancy/${vacancyId.id}`"
          :title="vacancyId.title"
        >
          <u-icons
            class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
            name="vacancy_twitter"
          /> </ShareNetwork
        ><ShareNetwork
          class="tg newsSingleBlock__link"
          network="Telegram"
          :url="`https://uic.group/vacancy/${vacancyId.id}`"
          :title="vacancyId.title"
        >
          <u-icons
            class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
            name="vacancy_telegram"
          />
        </ShareNetwork>
        <!--        <u-icons-->
        <!--          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"-->
        <!--          name="vacancy_facebook"-->
        <!--        />-->
        <!--        <u-icons-->
        <!--          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"-->
        <!--          name="vacancy_twitter"-->
        <!--        />-->
        <!--        <u-icons-->
        <!--          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"-->
        <!--          name="vacancy_telegram"-->
        <!--        />-->
      </div>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3">
          <span
            class="w-[20px] h-[20px] rounded-[50%] bg-[#ffffff24] flex items-center justify-center"
          >
            <u-icons class="text-white" name="date" />
          </span>
          <p
            class="capitalize lg:text-base text-xs md:text-sm text-vacancy-card-icon-text leading-5 font-['Roboto']"
          >
            <!-- {{ formatDate(vacancyId.date, true) }} -->
            {{ date[vacancyId?.from_day] ? $t(date[vacancyId?.from_day]) : "" }}
            -
            {{ date[vacancyId?.to_day] ? $t(date[vacancyId?.to_day]) : "" }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <span
            class="w-[20px] h-[20px] rounded-[50%] bg-[#ffffff24] flex items-center justify-center"
          >
            <u-icons class="text-white" name="time" />
          </span>
          <p
            class="lg:text-base text-xs md:text-sm text-vacancy-card-icon-text leading-5 font-['Roboto']"
          >
            <!-- {{ vacancyId.time }} -->
            {{ vacancyId?.from_clock?.slice(0, 5) }} -
            {{ vacancyId?.to_clock?.slice(0, 5) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { reactive } from "vue";

export interface Props {
  title: string;
  workDay: string;
  workTime: string;
  vacancyId: Array;
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

withDefaults(defineProps<Props>(), {
  title: "",
  workDay: "",
  workTime: "",
});
</script>

<style scoped>
.icon-bg svg {
  width: 22.15px;
  height: 22.15px;
}
</style>
