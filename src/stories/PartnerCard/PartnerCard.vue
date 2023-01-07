<template>
  <div class="cursor-pointer select-none">
    <a
      :href="link"
      target="_blank"
      style="-webkit-user-drag: none"
      aria-label="link"
    >
      <div
        class="xl:!w-full md:!w-[182px] xs:h-[66px] md:!h-[127px] sm:w-[136px] transition duration-300 ease-in-out flex justify-center grayscale hover:grayscale-0 items-center bg-[#252527] rounded-[6px] h-[127px]"
      >
        <img
          style="-webkit-user-drag: none"
          class="max-w-[170px] w-full h-full object-contain"
          :src="image"
          alt="partnerImg"
        />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  image: string;
  link: string;
}

withDefaults(defineProps<Props>(), {
  image: "https://picsum.photos/id/1/100",
  link: "https://google.com",
});
</script>
