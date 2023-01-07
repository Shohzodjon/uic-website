<template>
  <div
    class="mx-auto xl:grid sm:flex flex flex-col-reverse lg:justify-around justify-center group xl:grid-cols-12 xl:gap-[121px] sm:gap-[32px] gap-[32px] xl:max-h-[572px] h-full"
  >
    <div
      data-aos="fade-left"
      data-aos-duration="2000"
      class="grid justify-center xl:col-span-6 lg:col-span-3 xl:group-even:justify-start group-even:justify-center xl:group-odd:order-1 xl:group-even:order-2 sm:mb-0"
    >
      <img
        class="sm:max-w-[283px] max-w-[141px] w-full xl:max-h-[572px] lg:max-h-[430px] md:max-h-[370px] sm:max-h-[286px] max-h-[286px] h-full"
        :src="iphone"
        alt="phone"
      />
    </div>

    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      class="xl:group-odd:order-2 xl:group-even:order-1 xl:group-even:right-[430px] xl:relative xl:w-[991px] xl:max-h-[572px] lg:max-h-[430px] md:max-h-[370px] sm:max-h-[280px] max-h-[207px] lg:w-[700px] md:w-[600px] sm:w-[400px] w-[343px] xl:group-odd:left-[-121px] xl:col-span-6 lg:col-span-6 screen-img rounded-8"
    >
      <img class="w-full h-full" :src="screen" alt="screen" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iphone: {
    type: String,
  },
  screen: {
    type: String,
  },
});
</script>

<style scoped>
.screen-img {
  box-shadow: 0px 0px 0.75px rgba(0, 0, 0, 0.7),
    0px 7.45px 35px rgba(0, 0, 0, 0.12);
}
</style>
