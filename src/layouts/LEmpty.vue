<template>
  <div class="bg-[#1E1E20] text-white error-wrapp">
    <error-section />
  </div>
</template>
<script setup lang="ts">
import ErrorSection from "@/pages/ErrorPage/ErrorSection.vue";
import { useIndexStore } from "@/stores/MetaInfo";
import { onMounted } from "vue";

const $indexStore = useIndexStore();

onMounted(() => {
  // console.log("nimadur ");
  $indexStore.setMetaInfo({
    title: "Page not found",
    tagName: "title",
  });
});
</script>
<style scoped>
.error-wrapp {
  overflow: hidden !important;
  height: 100vh;
}
</style>
