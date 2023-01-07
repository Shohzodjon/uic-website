<template>
  <c-loader v-if="loading" />
  <div>
    <big-title
      :data-aos-duration="500"
      class="pt-[130px] mb-16"
      data-aos="fade-left"
      v-bind="{ title: $t('header.blog') }"
    />
    <div class="container">
      <div
        class="hidden md:flex items-start gap-[32px] card-tabs relative"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <span
          :class="category == undefined ? '_active-all' : ''"
          class="flex border-solid border-[1px] border-[#4A4B4D] p-[11px] rounded-[12px] cursor-pointer group hover:border-[#00A795] duration-300"
          @click="clickClearCategory"
        >
          <u-icon
            class="text-[#979798] group-hover:text-[#00A795] duration-300"
            name="blog_burger"
          />
        </span>
        <!-- <transition name="menu" class="custom-animation"> -->
        <!-- v-if da hamma tabs kursatadi -->
        <div
          v-if="openTab"
          :class="openTab ? 'flex-wrap' : 'overflow-hidden'"
          class="tabs-wrapper flex gap-[24px] items-center transition duration-300"
        >
          <span
            v-for="(item, index) in blogCategory?.results?.categories"
            :key="index"
            :class="
              item.id == category
                ? 'border-[#00A795] text-white'
                : 'text-[#979798] border-[#4A4B4D]'
            "
            class="border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]"
            @click="check(item.id)"
            >{{ item.category }}
          </span>
        </div>
        <!-- faqat 6 tasini kursatadi -->
        <div
          v-else
          :class="openTab ? 'flex-wrap' : 'overflow-hidden'"
          class="relative tabs-wrapper flex gap-[24px] items-center transition duration-300"
        >
          <span
            class="category-gradient absolute right-[-50px] top-0 w-[100px] h-[50px]"
          />
          <span
            v-for="(item, index) in blogCategory?.results?.categories.slice(
              0,
              6
            )"
            :key="index"
            :class="
              item.id == category
                ? 'border-[#00A795] text-white'
                : 'text-[#979798] border-[#4A4B4D]'
            "
            class="border-[1px] whitespace-nowrap cursor-pointer py-[11px] px-[32px] rounded-[12px] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]"
            @click="check(item.id)"
            >{{ item.category }}
          </span>
        </div>
        <!-- </transition> -->
        <u-icon
          :class="openTab ? 'rotate-180' : ''"
          class="text-[#00A795] z-10 cursor-pointer hover:text-[#00A79590] duration-300 ml-auto relative top-[10px] right-0"
          name="tab_more"
          @click="openTab = !openTab"
        />
      </div>

      <basic-input
        v-model="searchValue"
        :data-aos-duration="1500"
        :maxlength="100"
        class="mt-[28px]"
        data-aos="fade-right"
        v-bind="{
          maxlength: 100,
          backgroundColor: '#14141575',
          type: 'text',
          placeholder: $t('search'),
          searchIcon: true,
          modelValue: searchValue,
        }"
      />

      <div
        v-if="blogData?.results?.blog.length"
        class="grid mt-24 mb-12 md:grid-cols-2 md:gap-x-11 gap-y-24 md:gap-y-10 sm:mt-12"
      >
        <blog-card
          v-for="(item, index) in blogData?.results?.blog"
          :key="index"
          :data-aos-duration="`1500`"
          :search-query="searchValue"
          data-aos="fade-right"
          v-bind="{
            title: item.title,
            text: item.description,
            img: item?.image_url,
            alt: item.alt,
            date: item.date,
            views: item.views,
            type: item.category.category,
            slug: `blog/${item.id}`,
          }"
        />
      </div>

      <h2
        v-else
        class="my-[48px] font-bold text-[35px] leading-[40px] text-white text-center"
      >
        {{ $t("result_notfound") }}
      </h2>
      <!-- <pre>{{route}}</pre> -->
      <div
        v-if="blogData?.results?.blog.length"
        class="flex items-center justify-end pagination-wrapp"
      >
        <v-pagination
          v-model="pages"
          :pages="pageData"
          :range-size="1"
          active-color="red"
          @update:modelValue="updateHandler(pages)"
        />
      </div>
    </div>
    <div class="mt-16 blog-index-clients-comment">
      <clients-comment class="blog-clients-review" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import BigTitle from "@/stories/BigTitle/BigTitle.vue";
import UIcon from "@/stories/ui/UIcons/UIcons.vue";
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import ClientsComment from "@/components/indexSections/ClientsComment.vue";
import CLoader from "@/components/CLoader.vue";
import BlogCard from "@/stories/common/cards/BlogCard/BlogCard.vue";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { useBlogStore } from "@/stores/blog";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";
import { useRoute, useRouter } from "vue-router";

const globalStore = useGlobalStore();
const loading = ref(true);
const searchValue = ref("");
const pages = ref(1);
const category = ref(undefined);
const openTab = ref(false);
const blogStore = useBlogStore();

const blogData = computed(() => blogStore.blog);
const pageData = computed(() => blogStore.blog?.total_pages);
const blogCategory = computed(() => blogStore.categoryData);

const router = useRouter();
const $indexStore = useIndexStore();
// const { t: $t } = useI18n();

const route = useRoute();

watch(searchValue, () => {
  blogStore.fetchBlog(category.value, searchValue.value, pages.value);
});

onMounted(() => {
  if (!route.query.page) route.query.page = "1";
  pages.value = Number(route.query.page);
  blogStore
    .fetchBlog(category.value, searchValue.value, pages.value ? pages.value : 1)

    .finally(() => {
      setTimeout(() => (loading.value = false), 300);
    });
  blogStore.fetchCategory().then(() => {
    globalStore.openLoad(loading);
  });
});

useOnLanguageChange(() => {
  blogStore.fetchBlog(category.value, searchValue.value, pages.value);

  blogStore.fetchCategory();
});

const clickClearCategory = () => {
  category.value = undefined;
  blogStore.fetchBlog(category.value, searchValue.value, pages.value);
};

const check = (id: any) => {
  category.value = id;
  pages.value = 1;
  blogStore.fetchBlog(category.value, searchValue.value, 1);
};

const updateHandler = (e: any) => {
  if (route.query.page > 1) {
    pages.value = route.query.page;
  } else {
    pages.value = e;
  }
  window.scrollTo({ top: 300, behavior: "smooth" });
  blogStore.fetchBlog(category.value, searchValue.value, pages.value);
  router.push(`/blog?page=${e}`);
};

onMounted(() => {
  $indexStore.setMetaInfo({
    title: "UIC Blog",
    tagName: "title",
  });
});
</script>

<style>
.blog-index-clients-comment .swiper-horizontal > .swiper-pagination-bullets,
.blog-index-clients-comment
  .swiper-pagination-bullets.swiper-pagination-horizontal,
.blog-index-clients-comment .swiper-pagination-custom,
.swiper-pagination-fraction {
  justify-content: flex-start !important;
}
@media (max-width: 767px) {
  .blog-index-clients-comment .swiper-pagination {
    bottom: 0px !important;
    left: 50% !important;
  }
}
@media (max-width: 766px) {
  .blog-index-clients-comment
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px;
    left: 50%;
    transform: translateX(-10%);
    justify-content: center;
    margin: 0 auto;
  }
}
@media (max-width: 500px) {
  .blog-index-clients-comment
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -1px;
    left: 50%;
    transform: translateX(-20%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.wrapp {
  max-height: 48px;
  transition: max-height 0.4 ease-in-out;
  overflow: hidden;
}
.wrap-out {
  max-height: 400px;
  height: fit-content;
  transition: max-height 0.65s ease-in-out;
  overflow: auto;
}
.menu-enter-active {
  animation: search 0.1s ease-out;
}
.custom-animation {
  animation: search 0.1s ease-out;
}
@keyframes search {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-tabs::after {
  content: "";
  position: absolute;
  width: 182px;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(
    90deg,
    rgba(30, 30, 32, 0) 0%,
    #1e1e20 100%
  );
}

.card-tabs span._active {
  color: white !important;
  border: 1px solid #00a795;
}

.card-tabs ._active-all {
  background-color: #00a795;
  border: 1px solid #00a795;
}

.card-tabs ._active-all svg path {
  fill: white;
}

.pagination-wrapp ul li:nth-child(1) svg {
  display: none;
}

.pagination-wrapp ul li:last-child svg {
  display: none;
}

.pagination-wrapp ul > li > button {
  box-shadow: 0 10px 28px rgba(38, 55, 91, 0.06);
  border-radius: 12px;
  padding: 12px 17px;
  border: none;
  width: 44px;
  height: 44px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "salt" on;
  color: #979798;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  background: none !important;
  justify-content: center;
}

.pagination-wrapp ul li {
  border: none !important;
}

.pagination-wrapp ul > li > button:hover {
  color: #1b9684;
}

.pagination-wrapp .Page-active {
  color: #ffffff;
  border: 1px solid #00a795;
}

@media (max-width: 767px) {
  .blog-index-clients-comment .swiper-pagination {
    bottom: 0px !important;
    left: 50% !important;
  }
  .blog-index-clients-comment .swiper-horizontal > .swiper-pagination-bullets {
    justify-content: flex-start !important;
  }
}
@media (max-width: 766px) {
  .blog-index-clients-comment
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0px;
    left: 50%;
    transform: translateX(-10%);
    justify-content: center;
    margin: 0 auto;
  }
}
@media (max-width: 500px) {
  .blog-index-clients-comment
    .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: -1px;
    left: 50%;
    transform: translateX(-20%);
  }
}
</style>
