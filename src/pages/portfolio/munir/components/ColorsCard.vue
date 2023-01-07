<template>
  <div
    data-aos="fade-left"
    data-aos-duration="1700"
    class="colors-card mb-[2px] rounded-[10px] max-w-[279px] w-full lg:h-[151px] md:h-[100px] sm:h-[80px] h-[80px] flex flex-col lg:p-[20px] sm:p-[10px] p-2"
    :class="customBg"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <p
      :class="mainCustom"
      class="font-openSans sm:text-[16px] sm:leading-[22px] text-[14px] leading-[18px]"
    >
      {{ $t("munir.main") }}
    </p>
    <p
      :class="textColor"
      class="font-openSans font-semibold sm:text-[20px] sm:leading-[27px] text-[16px] leading-[22px]"
    >
      {{ colorKey }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  image: String,
  customBg: String,
  mainCustom: String,
  colorKey: String,
  textColor: String,
});
</script>
<style scoped>
.colors-card {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
}
</style>
