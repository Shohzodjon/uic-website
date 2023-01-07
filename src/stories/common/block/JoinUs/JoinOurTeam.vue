<template>
  <div
    class="grid bg-[#ffffff12] p-8 md:p-10 lg:pt-12 pb-16 lg:pb-16 md:gap-y-3 lg:gap-y-8 lg:px-14 md:grid-cols-12 rounded-xl items-start"
  >
    <div :class="customClass" class="xl:col-span-7 col-span-12">
      <h2
        v-if="title"
        class="font-bold text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:!leading-[120%] text-white line-clamp-3 md:line-clamp-2 max-w-[631px] mb-4 md:mb-8"
      >
        {{ $t(title || "") }} :)
      </h2>
      <p
        v-if="text"
        class="font-['Roboto'] text-center md:text-left font-normal text-sm sm:text-base !leading-[120%] sm:!leading-[140%] text-[#e0e0e099] line-clamp-3 sm:line-clamp-2 max-w-[622px] tracking-[0.2px]"
      >
        {{ $t(text) }}
      </p>
    </div>
    <ul
      v-if="vacancies?.length"
      class="xl:col-span-5 col-span-12 ml-0 lg:ml-5 grid gap-6 lg:mt-0 mt-8"
    >
      <li v-for="(item, index) in vacancies" :key="index" @click="scrollEvent">
        <router-link
          :to="`/vacancy/${item.id}`"
          class="flex items-center font-medium text-sm md:text-lg !leading-[130%] tracking-[0.002em] text-white line-clamp-2 hover:text-[#00a795] transition duration-300 ease-in-out hover:transition hover:duration-300"
        >
          <svg
            class="mr-2 min-w-[32px] inline"
            data-v-8f9e4d0e=""
            fill="none"
            height="2"
            viewBox="0 0 32 2"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              data-v-8f9e4d0e=""
              fill="white"
              height="32"
              opacity="0.2"
              transform="rotate(-90 0 2)"
              width="2"
              y="2"
            ></rect>
          </svg>
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  link?: string;
  title?: string;
  text?: string;
  customClass: string;
  vacancies: Array<object>;
}

withDefaults(defineProps<Props>(), {});
function scrollEvent() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 800);
}
</script>
