<template>
  <div>
    <h4 class="about__title mb-4" data-aos="fade-up" data-aos-duration="800">
      Mangu Sarkarda
    </h4>
    <p class="about_text" data-aos="fade-up" data-aos-duration="800">
      Mangu Sarkarda - {{ $t("about_page.mangu_sarkarda") }}
    </p>
    <div
      class="card min-h-[388px] rounded-[17px] mt-4 pt-[0px] sm:pt-[28px] p-[28px] flex flex-col items-center justify-center bg-[#000] relative overflow-hidden"
    >
      <video class="w-[500px] absolute" autoplay loop muted>
        <source src="/src/assets/image/ms.mp4" type="video/mp4" />
      </video>
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        class="flex items-start md:items-center flex-col md:flex-row gap-y-2 md:w-fit mr-auto mt-auto border-[#FFFFFF33] border-solid md:border-[1px] rounded-[12px] p-[6px] pl-2"
      >
        <div class="flex items-center gap-2">
          <u-icons name="game" />
          <p
            class="leading-[19px] tracking-[0.03em] text-[14px] md:text-[16px]"
          >
            mangusarkarda.com
          </p>
        </div>
        <a
          href="https://mangusarkarda.com/"
          target="_blank"
          class="bg-[#00A795] rounded-[6px] text-[16px] py-1 px-8 md:px-2 md:ml-8 hover:bg-[#049282] duration-300"
          >{{ $t("download_game") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
</script>

<style scoped>
.card {
  background: url("/uic-images/image/mangu_sarkarda_left.png"),
    url("/uic-images/image/mangu_sarkarda_right.png") black;
  background-position: left center, right center, 0;
  background-repeat: no-repeat;
  /*background-size: cover;*/
}
@media (max-width: 850px) {
  .card {
    background-size: 120px;
  }
}
@media (max-width: 720px) {
  .card {
    background-size: 0px;
  }
}
</style>
