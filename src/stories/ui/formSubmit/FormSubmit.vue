<template>
  <div class="rounded-3xl flex items-center justify-center py-[35px]">
    <span
      class="w-[55px] h-[55px] bg-[#00A795] rounded-full flex items-center justify-center text-white md:mr-[24px] mr-2 md:px-0 px-2"
    >
      <u-icons name="smallTick" />
    </span>
    <div>
      <h1 class="text-white mb-2 leading-[120%] md:text-2xl text-xl font-bold">
        {{ $t("form.success") }}
      </h1>
      <p
        class="text-[#E0E0E099] md:text-[16px] text-14px font-normal font-['Roboto'] leading-[140%] font-['Roboto']"
      >
        {{ $t("form.sucesDesc") }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

export interface Props {
  col: boolean;
}
withDefaults(defineProps<Props>(), {
  col: true,
});
</script>
