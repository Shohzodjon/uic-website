<template>
  <div
    class="my-10 flex flex-col sm:flex-row rounded-[24px] bg-[#252527] border-solid border-[#37373A]"
  >
    <img
      src="/uic-images/image/brend_year.png"
      alt="brand of the year"
      class="rounded-l-[24px] rounded-r-[24px] sm:rounded-r-[0px] w-[100%] sm:w-[80%] md:w-[283px]"
    />
    <div
      class="p-4 sm:p-6 md:p-8 flex flex-col justify-between w-full brand-year-gradient rounded-r-[24px] rounded-l-[24px] sm:rounded-l-[0px]"
      style=""
    >
      <i18n-t
        keypath="about_page.brand_year"
        tag="p"
        scope="global"
        class="max-w-[494px] text-[16px] md:text-[18px] lg:text-[20px] font-bold leading-[140%] tracking-[0.2px] font-['Roboto'] mb-5"
        ><template v-slot:action>
          <span class="text-[#00A795]">“{{ $t("brand_year") }}”</span>
        </template>
      </i18n-t>
      <div
        class="flex items-start md:items-center flex-col md:flex-row gap-y-2 md:w-fit border-[#FFFFFF33] border-solid md:border-[1px] rounded-[12px] p-[6px] pl-2"
      >
        <div class="flex items-center gap-2">
          <u-icons name="telegram_gray" />
          <p
            class="leading-[19px] tracking-[0.03em] text-[14px] md:text-[16px]"
          >
            https://t.me/uicgroup/247
          </p>
        </div>
        <a
          href="https://t.me/uicgroup/247"
          class="bg-[#00A795] rounded-[6px] text-[16px] py-1 px-8 md:px-2 md:ml-8 hover:bg-[#049282] duration-300"
          >{{ $t("go") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
</script>

<style scoped>
.brand-year-gradient {
  background: linear-gradient(
    151deg,
    rgba(65, 75, 80, 0) 0%,
    rgba(58, 69, 74, 0) 47%,
    rgba(0, 167, 149, 0.17130602240896353) 100%
  );
}
@media (max-width: 576px) {
  .brand-year-gradient {
    background: linear-gradient(
      180deg,
      rgba(65, 75, 80, 0) 0%,
      rgba(58, 69, 74, 0) 47%,
      rgba(0, 167, 149, 0.17130602240896353) 100%
    );
  }
}
</style>
