<template>
  <div class="">
    <div class="$style.word-wrapper overflow-hidden">
      <h1
        class="flex items-center justify-center relative font-['Greycliff CF'] font-extrabold whitespace-nowrap text-[56px] leading-[67px] sm:text-[56px] sm:leading-[67px] md:text-[100px] md:leading-[150px] lg:text-[210px] lg:leading-[252px] stroke-[#ffffff1a] border-solid uppercase"
      >
        {{ title }}
        <span
          class="flex items-center justify-center font-['Greycliff CF'] absolute top-[50%] left-[50%] translate-y-[-30%] -translate-x-2/4 uppercase !text-white !font-extrabold text-[40px] leading-[48px] sm:text-[40px] sm:leading-[48px] md:text-[56px] md:leading-[74px] lg:text-[78px] lg:leading-[94px]"
        >
          {{ title }}
        </span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string;
}

withDefaults(defineProps<Props>(), {
  title: "",
});
</script>

<style scoped>
h1 {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
}

span {
  -webkit-text-fill-color: white;
}
</style>
