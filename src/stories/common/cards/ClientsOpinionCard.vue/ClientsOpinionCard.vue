<template>
  <div
    class="grid grid-cols-12 md:gap-x-[21px] gap-x-0 grid-rows-3 md:gap-y-[35px] md:grid-flow-col md:pb-48"
  >
    <div
      class="flex items-start justify-center order-last col-span-12 gap-5 pb-3 mb-6 md:col-span-6 md:justify-start md:order-first md:mt-0 mt-14 md:mb-0 md:pb-0"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <img
        :alt="props.alt"
        :src="props.img"
        class="md:w-[60px] w-[39px] md:h-[60px] h-[39px] rounded-[50%] object-cover object-center"
      />
      <div class="grid md:gap-1.5 gap-1">
        <h2
          class="font-['Greycliff CF'] font-bold sm:text-base text-[13px] text-white sm:!leading-[20.8px] !leading-[16px] uppercase line-clamp-1"
        >
          {{ props.clientName }}
        </h2>
        <h3
          class="font-roboto font-normal sm:text-base text-[13px] text-[#e0e0e099] sm:!leading-[22.4px] !leading-[18px] tracking-[0.2px] line-clamp-1"
          v-html="props.clientPosition"
        ></h3>
      </div>
    </div>
    <div
      class="order-first col-span-12 md:col-span-6 md:row-span-2 row-span-full blockquote-icon-wrapper"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <u-icons
        class="md:w-[48px] w-[32px] md:h-[48px] h-[32px] text-[#00A795]"
        name="blockquote"
      />
      <div class="mt-0 mb-3 md:mt-3 md:mb-5 min-h-[63px]">
        <p
          class="font-bold sm:text-xl text-[15px] text-white md:!leading-[28px] sm:leading-[21px] leading-[21px] line-clamp-3"
          v-html="props.clientComment"
        ></p>
      </div>
      <div class="flex gap-3 mb-6 sm:gap-4 md:mb-0">
        <!-- font-sofia -->
        <p
          class="font-sofia font-medium text-[#ffffff4d] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
        >
          {{ props.service }}
        </p>

        <!-- font-sofia  -->
        <a
          :href="props.clientSiteLink"
          class="font-medium text-[#00A795] sm:text-sm text-[13px] sm:!leading-[18px] !leading-[16px] uppercase line-clamp-1 max-w-[250px]"
          target="_blank"
          >{{ props.clientSite }}</a
        >
      </div>
    </div>
    <div
      class="col-span-12 row-span-3 md:col-span-6"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <p
        class="lg-pt-[30px] font-roboto font-normal sm:text-base text-[13px] sm:!leading-[22px] !leading-[18px] tracking-[0.2px] text-[#e0e0e099] md:min-h-[400px] sm:min-h-[200px] xs:min-h-[100px] min-h-[200px] md:max-h-[498px] sm:max-h-[218px] max-h-[218px] overflow-auto"
        v-html="props.clientMoreComment"
      ></p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

export interface Props {
  img?: string;
  alt?: string;
  clientName?: string;
  clientPosition?: string;
  clientComment?: string;
  service?: string;
  clientSite?: string;
  clientMoreComment?: string;
  clientSiteLink?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>
<style scoped>
@media (max-width: 768px) {
  .blockquote-icon-wrapper i svg,
  .blockquote-icon-wrapper i svg path {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>
