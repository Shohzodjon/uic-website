<template>
  <div
    class="w-[292px] bg-[#FFB682] h-[53px] p-3 rounded-12 flex justify-between items-center"
  >
    <div
      class="bg-[#F07C29] rounded-8 w-[147px] h-[29px] flex justify-between items-center"
    >
      <span
        class="bg-[#FFF] rounded-8 text-[14px] leading-[13px] py-2 px-3 text-[#F07C29] font-medium"
        >{{ title }}</span
      >
      <span
        class="text-[#fff] text-[14px] leading-[13px] font-medium py-2 px-3"
      >
        {{ time }}</span
      >
    </div>
    <div class="line h-[1px] w-[29px] bg-white rotate-90"></div>
    <h3
      class="text-[20px] leading-[20px] text-[#FFF] font-semibold tracking-[0.03px] whitespace-nowrap"
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
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
