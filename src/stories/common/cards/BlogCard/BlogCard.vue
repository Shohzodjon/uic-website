<template>
  <router-link :to="slug">
    <div
      class="blog-card sm:ml-[15px] ml-0 bg-blog-card-background grid grid-cols-12 sm:px-0 px-4 rounded-8 group hover:transition hover:ease-in-out hover:duration-500"
    >
      <div
        class="sm:col-span-5 col-span-12 sm:-mt-0 -mt-[70px] sm:mr-3 h-[180px] sm:h-[210px]"
      >
        <div
          class="relative group-hover:-translate-x-0 sm:-translate-x-[24px] w-[100%] h-[100%] -translate-x-[0px] group-hover:-translate-y-0 md:-translate-y-[16px] group-hover:transition transition group-hover:duration-500 duration-500"
        >
          <img
            class="w-full h-full sm:w-[280px] rounded-8 object-cover object-top"
            :src="img"
            :alt="alt"
          />
          <div
            class="bg-[#00000070] rounded backdrop-blur-[6px] py-2 px-4 absolute left-3 bottom-3"
          >
            <h2
              class="font-['Roboto'] font-normal text-xs tracking-[0.002em] text-white relative ml-1 before:content-[''] before:w-[1px] before:h-[16px] before:absolute before:-left-[4px] before:bottom-0 before:rounded-t-sm before:rounded-b-sm before:bg-[#00A795]"
            >
              {{ type }}
            </h2>
          </div>
        </div>
      </div>
      <div class="col-span-11 py-4 pr-0 sm:py-5.5 sm:pr-7 sm:col-span-7">
        <WordHighlighter
          :query="searchQuery"
          highlight-class="highlight-class !text-white !bg-[#00A795]"
          class="word-highlighter font-bold sm:text-base text-[15px] !leading-130 tracking-[0.002em] text-white line-clamp-1 sm:line-clamp-2"
        >
          {{ title }}
        </WordHighlighter>

        <p
          class="font-['Roboto'] font-normal text-xs !leading-140 text-gray line-clamp-1 sm:line-clamp-3 sm:my-4 mt-2 mb-3"
          v-html="text"
        />

        <hr />
        <div class="flex items-center gap-6 mt-2 sm:mt-4">
          <div class="flex items-center gap-2">
            <span
              class="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white"
              ><u-icons name="calendar"
            /></span>
            <span
              v-if="date"
              class="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1"
              >{{ formatDate(date, true) }}</span
            >
          </div>
          <div class="flex items-center gap-2">
            <span
              class="bg-[#ffffff24] group-hover:bg-[#00A795] transition group-hover:transition duration-500 group-hover:duration-500 w-5 h-5 rounded-[50%] flex items-center justify-center text-white"
              ><u-icons name="eye"
            /></span>
            <span
              class="font-['Roboto'] font-medium text-[13px] !leading-[15px] text-[#A5A5A6] line-clamp-1"
              >{{ views }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
import WordHighlighter from "vue-word-highlighter";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

export interface Props {
  title: string;
  text: string;
  img: string;
  alt: string;
  date: number | string;
  views: number;
  type: string;
  slug: string;
  searchQuery: string;
}

withDefaults(defineProps<Props>(), {});
</script>
<style></style>

<style></style>
