<template>
  <c-loader v-if="loading" />
  <div class="container pt-[130px]">
    <div class="container-video">
      <div class="overflow-hidden h-[55px] sm:mb-[44px] mb-5">
        <video class="bg-video" autoplay loop muted>
          <source src="/src/assets/image/text_bg.mp4" type="video/mp4" />
        </video>
      </div>
      <p
        class="text font-bold uppercase text-[54px] md:text-[64px] text-[#fff]"
      >
        portfolio
      </p>
    </div>

    <div
      :data-aos-duration="500"
      class="flex flex-wrap gap-[16px] md:gap-[24px] items-center duration-300 card-tabs mb-9"
      data-aos="fade-right"
    >
      <span
        :class="activeIndex == -1 ? '_active-all' : ''"
        class="flex border-solid border-[1px] border-[#4A4B4D] p-[11px] rounded-[12px] cursor-pointer group hover:border-[#00A795] duration-300"
        @click="fetchAllPortfolio"
      >
        <u-icon
          class="text-[#979798] group-hover:text-[#00A795] duration-300"
          name="blog_burger"
        />
      </span>
      <span
        v-for="(item, index) in portfolioCategories?.results"
        :key="index"
        ref="activeCategoryButton"
        :class="activeIndex == index ? 'active-button' : ''"
        class="font-['Roboto'] span-button border-solid border-[1px] border-[#4A4B4D] whitespace-nowrap cursor-pointer py-[8px] md:py-[11px] px-[16px] md:px-[32px] rounded-[12px] text-[#979798] font-bold text-[16px] duration-300 hover:text-[#00A795] hover:border-[#00A795]"
        @click="categorySelect(item.id, index)"
        >{{ item.title }}
      </span>
    </div>

    <portfolio-card :cards="portfolioData" />

    <!-- Loadmore button TODO:-->
    <div v-if="false">
      <white-button
        :data-aos-duration="500"
        class="h-[48px] w-[200px] flex justify-between mt-[52px] mx-auto"
        data-aos="fade-right"
        v-bind="{
          title: 'load_more',
          icon: 'load_more_arrow',
        }"
      />
    </div>
  </div>
  <clients-comment class="mt-16" />
</template>

<script lang="ts" setup>
import PortfolioCard from "@/stories/PortfolioCard/PortfolioCard.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import UIcon from "@/stories/ui/UIcons/UIcons.vue";
import ClientsComment from "@/components/indexSections/ClientsComment.vue";
import CLoader from "@/components/CLoader.vue";
import { computed, onMounted, ref } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { useRoute } from "vue-router";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";

const globalStore = useGlobalStore();
const route = useRoute();
const $indexStore = useIndexStore();
const portfolioStore = usePortfolioStore();
const portfolioData = computed(() => portfolioStore.mainPortfolio);
const portfolioCategories = computed(() => portfolioStore.mainCategories);

const activeIndex = ref(-1);

function categorySelect(id: any, index: number) {
  activeIndex.value = index;
  portfolioStore.fetchMainPortfolioImg(id);
}

function fetchAllPortfolio() {
  activeIndex.value = -1;
  portfolioStore.fetchMainPortfolioImg();
}

function fetchSelectedCategory() {
  if (route.name == "PPortfolio/mobile") {
    activeIndex.value = 0;
    portfolioStore.fetchMainPortfolioImg(3);
    // console.log(portfolioStore.fetchMainPortfolioImg(3));
  } else if (route.name == "PPortfolio/websites") {
    activeIndex.value = 1;
    portfolioStore.fetchMainPortfolioImg(4);
    // console.log(portfolioStore.fetchMainPortfolioImg(4));
  } else if (route.name == "PPortfolio/branding") {
    portfolioStore.fetchMainPortfolioImg(7);
    activeIndex.value = 2;
  }
}

const loading = ref(true);
onMounted(() => {
  portfolioStore.fetchMainPortfolioImg();
  portfolioStore
    .fetchPortfolioCategories()
    .then(() => {
      globalStore.openLoad(loading);
    })
    .finally(() => {
      setTimeout(() => (loading.value = false), 300);
    });
  fetchSelectedCategory();
});
useOnLanguageChange(() => {
  portfolioStore.fetchMainPortfolioImg();
  portfolioStore.fetchPortfolioCategories();
});
onMounted(() => {
  $indexStore.setMetaInfo({
    title: "UIC Portfolio",
    tagName: "title",
    // title: t("auth_meta"),
  });
});
</script>

<style scoped>
.active-button {
  color: white !important;
  border: 1px solid #00a795;
}

.card-tabs ._active-all {
  background-color: #00a795;
  border: 1px solid #00a795;
}
</style>
<style>
.card-tabs ._active-all .icon svg path {
  fill: white !important;
}
</style>
