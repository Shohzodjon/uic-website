<template>
  <div class="photogallery py-[40px]">
    <div>
      <div class="container !px-0 md:!px-[15px]">
        <div
          class="text-center section-title_green"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {{ $t("gallery.subtitle") }}
        </div>
        <div
          class="section-title_white text-center mb-[32px]"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {{ $t("gallery.title") }}
        </div>

        <gallery-card-slider
          :photogallery="photogallery"
          data-aos="fade-up"
          data-aos-duration="700"
          :sliderClass="'companySlider'"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import GalleryCardSlider from "@/stories/GalleryCardSlider/GalleryCardSlider.vue";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useGalleryStore } from "@/stores/gallery";

const galleryStore = useGalleryStore();
const photogallery = computed(() => galleryStore.mainPhotogallery);

onMounted(() => {
  galleryStore.fetchPhotogallery();
});
useOnLanguageChange(() => {
  galleryStore.fetchPhotogallery();
});
</script>

<style scoped>
.photogallery {
  background-image: linear-gradient(
      180deg,
      rgba(92, 102, 112, 0) 0%,
      rgba(25, 25, 26, 0.74) 20%,
      rgba(25, 25, 26, 1) 30%,
      rgba(25, 25, 26, 1) 50%,
      rgba(30, 30, 32, 1) 50%,
      rgba(30, 30, 32, 1) 100%
    ),
    url("@/assets/image/photogallery-bg.png");
  background-size: contain;
}
</style>
