<template>
  <div>
    <RouterView v-slot="{ Component }">
      <transition :name="route.meta.transition || 'layout'" mode="out-in">
        <div :key="route.name">
          <component :is="detectLayout">
            <transition mode="out-in" name="fade">
              <div class="min-h-[100vh]">
                <MetaInfo :data="$indexStore.meta" />
                <Component :is="Component" />
              </div>
            </transition>
          </component>
        </div>
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

import LDefault from "@/layouts/LDefault.vue";
import LBrief from "@/layouts/LBrief.vue";
import LEmpty from "@/layouts/LEmpty.vue";
import LMain from "@/layouts/LMain.vue";
import LPortfolio from "@/layouts/portfolio-layout.vue";

import { useIndexStore } from "@/stores/MetaInfo";
import MetaInfo from "@/components/MetaInfo.vue";
const $indexStore = useIndexStore();

const layouts: { [key: string]: any } = {
  default: LDefault,
  empty: LEmpty,
  brief: LBrief,
  portfolio: LPortfolio,
  mainPage: LMain,
};
// const loading = ref(true);
const route = useRoute();

const detectLayout = computed(() => {
  return layouts[route.meta.layout || ("default" as string)];
});

watch(
  () => route.fullPath,
  () => {
    // console.log($indexStore.meta);
    $indexStore.setMetaInfo({
      title: "UIC Group",
      tagName: "title",
      // title: $t("auth_meta"),
    });
  }
);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}

// Scale
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

a,
button {
  cursor: pointer;
}
</style>
