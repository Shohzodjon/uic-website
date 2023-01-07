<template>
  <div
    :class="mainBoxBgAndWidth ? mainBoxBgAndWidth : ''"
    class="w-[292px] bg-[#224B71] h-[53px] p-3 rounded-12 flex justify-between items-center"
  >
    <div
      :class="leftBoxBg ? leftBoxBg : ''"
      class="bg-[#3F75A7] rounded-8 w-[147px] h-[29px] flex justify-between items-center"
    >
      <span
        :class="leftBoxSpentTextColor ? leftBoxSpentTextColor : ''"
        class="bg-[#FFF] tracking-[0.07px] rounded-8 text-[14px] leading-[13px] py-2 px-3 text-[#3973A9] font-medium"
        >{{ title }}</span
      >
      <span
        :class="leftBoxTimeTextColor ? leftBoxTimeTextColor : ''"
        class="text-[#fff] tracking-[0.07px] text-[14px] leading-[13px] font-medium py-2 px-3"
      >
        {{ time }}</span
      >
    </div>

    <div class="line h-[1px] w-[29px] bg-white rotate-90"></div>
    <h3
      :class="workingDayTextColor ? workingDayTextColor : ''"
      class="text-[20px] leading-[20px] text-[#FFF] font-semibold tracking-[0.03em] whitespace-nowrap"
    >
      {{ spentTime }}
    </h3>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string;
  time: string;
  spentTime: string;
  mainBoxBgWidth: string;
  leftBoxBg: string;
  leftBoxSpentTextColor: string;
  leftBoxTimeTextColor: string;
  workingDayTextColor: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style></style>
