<template>
  <div
    class="relative flex items-center justify-center h-[160px] w-full mx-auto overflow-x-hidden text-center"
  >
    <h1
      class="flex items-center justify-center relative font-['Greycliff CF'] font-extrabold whitespace-nowrap text-[48px] leading-[58px] sm:text-[48px] sm:leading-[58px] md:text-[70px] md:leading-[90px] lg:text-[120px] lg:leading-[144px] stroke-[#ffffff1a] border-solid uppercase"
    >
      {{ $t(title) }}
      <span
        class="flex items-center justify-center w-full mx-auto font-['Greycliff CF'] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] uppercase whitespace-nowrap text-white font-extrabold text-[32px] leading-[38px] sm:text-[32px] sm:leading-[38px] md:text-[50px] md:leading-[60px] lg:text-[64px] lg:leading-[77px]"
      >
        {{ $t(title) }}
      </span>
    </h1>
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
<style scoped></style>
