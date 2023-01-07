<template>
  <div class="bg-[#1E1E20] h-full overflow-hidden" style="min-height: 100vh">
    <TheHeader
      v-bind="{ mainPage: true, scrollPosition: transparentHeader }"
      :class="[
        test && route.path === '/' ? '!absolute' : '!fixed',
        transparentHeader
          ? 'header-transparent border-transparent'
          : 'border-[#2F2F30] backdrop-blur-[12px]',
      ]"
    />
    <pre class="text-white"></pre>
    <slot />
    <Footer
      v-bind="{
        links: 'https://uic.group/',
        email: 'info@uic.group',
        map: '',
        map_link: '',
        tel: '+998 71 200 70 07',
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
    if (newValue >= 1072 || route.path !== "/") {
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
</style>
