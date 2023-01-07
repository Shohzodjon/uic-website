<template>
  <div class="bg-[#1E1E20] h-full overflow-hidden" style="min-height: 100vh">
    <TheHeader
      v-bind="{ scrollPosition: transparentHeader }"
      :class="[
        test ? '!absolute' : '!fixed',
        transparentHeader
          ? 'header-transparent border-transparent'
          : 'border-[#2F2F30] backdrop-blur-[12px]',
      ]"
    />
    <main class="">
      <transition name="page">
        <slot :key="$route.fullPath" />
      </transition>
    </main>

    <Footer
      v-bind="{
        links: 'https://uic.group/',
        email: 'info@uic.group',
        map: '',
        map_link: '',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/stories/layout/theHeader/TheHeader.vue";
import Footer from "@/stories/layout/theFooter/theFooter.vue";
import { ref, watch } from "vue";
import { useScrollPosition } from "@/composables/useScrollPosition";
import { useRoute } from "vue-router";

const route = useRoute();
// console.log(route, "path");
const { scrollPosition } = useScrollPosition();

const transparentHeader = ref(true);
const test = ref(true);
watch(
  () => scrollPosition.value,
  (newValue) => {
    if (newValue >= 772 || route.path !== "/") {
      transparentHeader.value = false;
    }
    if (newValue > 0) {
      test.value = false;
    } else {
      transparentHeader.value = true;
    }
  }
);
</script>

<style scoped>
.header-transparent {
  background-color: transparent;
}

.page-enter-active {
  animation: scalePage 0.3s ease-out;
}

.page-leave-active {
  animation: scalePage 0.3s ease-in reverse;
}
@keyframes scalePage {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
