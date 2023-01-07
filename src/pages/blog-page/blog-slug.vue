<template>
  <c-loader v-if="loading" />
  <div class="blog-item text-white pt-24 md:pt-[180px]">
    <div
      :style="`background-image: linear-gradient(180deg, rgba(30, 30, 32, 0.5) 0%, #1E1E20 100%), url(${blog?.content_image_url})`"
      class="blog-item__banner flex flex-col justify-end !max-w-[1192px] h-[280px] md:h-[350px] lg:h-[556px] mx-auto xl:rounded-[8px] p-6 md:p-12"
    >
      <div class="flex items-center gap-4">
        <div class="bg-[#00000070] px-2 py-[6px] rounded-[4px]">
          <p
            class="border-l border-solid leading-[14px] border-[#00A795] pl-1 font-['Roboto'] text-[12px]"
          >
            {{ blog?.category?.category }}
          </p>
        </div>
        <!-- font-sofia -->
        <p class="font-medium leading-[18px] text-[14px]">
          {{ blog?.author }}
        </p>
      </div>
      <h5
        class="mt-2 text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[120%] pb-2 md:pb-6 line-clamp-3"
      >
        {{ blog?.title }}
      </h5>
      <hr class="" />
      <div class="flex items-center gap-10 pt-2 md:pt-6">
        <div class="flex items-center gap-3">
          <u-icons name="banner_calendar" />
          <p
            v-if="blog?.date"
            class="text-[#A5A5A6] font-['Roboto'] leading-[19px] font-medium"
          >
            <!-- {{ blog?.date }} -->
            {{ formatDate(blog?.date, true) }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <u-icons name="banner_view" />
          <p class="text-[#A5A5A6] font-['Roboto'] leading-[19px] font-medium">
            {{ blog?.views }}
          </p>
        </div>
      </div>
    </div>
    <!--content-->
    <div class="container">
      <div
        class="blog-item__content max-w-[990px] mx-auto mt-8 font-['Roboto'] leading-[140%] text-[#E0E0E0] text-[13px] md:text-[16px]"
        v-html="blog?.content"
      />
    </div>
    <div v-if="false" class="container !mt-10">
      <div
        class="flex flex-col md:flex-row bg-[#2B2B2E] lg:py-8 md:py-7 py-5 lg:px-10 md:px-8 px-5 sm:justify-between tracking-[0.2px] gap-2 lg:gap-4 flex-wrap items-center font-['Roboto'] rounded-8 text-gray-100 font-medium text-sm md:text-base leading-5"
      >
        <div
          class="flex flex-col items-center gap-1 mb-6 md:flex-row lg:gap-8 md:gap-7 md:mb-0"
        >
          <p class="">{{ $t("like_article") }}</p>
          <div class="flex gap-6">
            <button class="flex items-center gap-2" aria-label="button">
              <!-- @click="vote()" -->
              <u-icons
                id="like-btn"
                :class="activeVote == 2 ? '!text-[#00A795]' : ''"
                class="hover:text-vacancy-card-footer-bg-active transition duration-300 text-[#AAAAAB]"
                name="vote_like"
              />
              <p class="">{{ like }}</p>
            </button>
            <button class="flex items-center gap-2" aria-label="button">
              <!-- @click="disVote()" -->
              <u-icons
                id="dislike-btn"
                :class="activeVote == 3 ? '!text-[#00A795]' : ''"
                class="hover:text-vacancy-card-footer-bg-active transition duration-300 text-[#AAAAAB]"
                name="vote_dislike"
              />
              <p class="text-gray-100">{{ disLike }}</p>
            </button>
          </div>
        </div>
        <div class="flex items-center gap-4 lg:gap-8 md:gap-7">
          <p>{{ $t("share") }}:</p>
          <div class="flex gap-4">
            <a
              v-for="(item, index) in socialLinks"
              :key="index"
              :href="item.link"
              class="flex transition duration-300 group"
            >
              <u-icons
                :name="item.icon"
                class="group-hover:text-vacancy-card-footer-bg-active transition duration-300 text-[#AAAAAB]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <div class="bg-[#141415] py-16 mt-14 md:mt-32">
      <advise-slider
        :recommendation="eachBlog?.mainBlogId?.for_recommendation"
      />
    </div>
    <!-- <pre class="text-white">{{ blog }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useBlogStore } from "@/stores/blog";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";

import router from "@/router";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import AdviseSlider from "@/components/AdviseSlider.vue";
import CLoader from "@/components/CLoader.vue";

const globalStore = useGlobalStore();
const activeVote = ref(0);
const eachBlog = useBlogStore();

const blog = computed(() => eachBlog.mainBlogId?.current_blog);
const socialLinks = [
  {
    icon: "facebook_share",
    link: "https://uic.group/uz/",
  },
  {
    icon: "twitter_share",
    link: "https://uic.group/uz/",
  },
  {
    icon: "telegram_share",
    link: "https://uic.group/uz/",
  },
];

const like = ref(0);
const disLike = ref(0);
const loading = ref(true);

const $indexStore = useIndexStore();

useOnLanguageChange(() => {
  eachBlog.fetchEachBlog(router.currentRoute._rawValue.params.slug);
});
onMounted(() => {
  eachBlog
    .fetchEachBlog(router.currentRoute._rawValue.params.slug)
    .then(() => {
      globalStore.openLoad(loading);
      $indexStore.setMetaInfo({
        title: blog.value?.title || "UIC Blog",
        tagName: "title",
      });
    })
    .finally(() => {
      setTimeout(() => (loading.value = false), 300);
    });
});

// const { data, error, isLoading, getData } = useVisitorData(
//   { extendedResult: true },
//   { immediate: false }
// );
// watch(data, (currentData) => {
//   if (currentData) {
//     userId.value = currentData;

//     console.log(userId, "data");
//   }
// });

// onMounted(() => {
//   fetch(
//     `http://10.10.0.111:8000/api/v1/blog_like/${router.currentRoute._rawValue.params.slug}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data, "like count");
//       like.value = data.likes;
//       disLike.value = data.dislikes;
//     });
// });

// const vote = () => {
//   getData();
// };
// const disVote = () => {
//   getData();
// };
</script>

<style>
.blog-item__banner {
  background-repeat: no-repeat;
  background-size: cover;
}

.blog-item__content img {
  width: 100%;
  height: 492px;
  border-radius: 8px;
  margin: 40px 0;
  object-fit: cover;
}

@media (max-width: 768px) {
  .blog-item__content img {
    height: 250px;
    margin: 24px 0;
  }
}
</style>
