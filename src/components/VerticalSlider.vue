<template>
  <div class="relative overflow-hidden">
    <div data-aos="fade-left" data-aos-duration="500">
      <h1
        class="absolute text-stroke text-[170px] leading-[204px] left-[53px] translate-y-[-50%] horizontal-stroke hidden md:block"
      >
        {{ $t("fast") }}
      </h1>
    </div>
    <div></div>

    <h1
      class="absolute text-stroke text-[170px] leading-[204px] bottom-0 right-[50%] md:translate-x-[50%] lg:translate-x-[75%] xl:translate-x-[92%] translate-y-[40%] horizontal-stroke hidden md:block"
    >
      {{ $t("creative") }}
    </h1>
    <div
      class="container py-14 md:py-24"
      data-aos="fade-right"
      data-aos-duration="500"
    >
      <div
        class="sm:px-0 px-[9px] horizontal-scroll max-w-[888px] md:max-h-[478px] mx-auto md:pr-24 overflow-auto"
      >
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text1") }}
        </p>
        <br />
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text2") }}
        </p>
        <br />
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text3") }}
        </p>
        <br />
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text4") }}
        </p>
        <br />
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text5") }}
        </p>
        <br />
        <p
          class="text-[#E0E0E099] md:text-white font-['Roboto'] text-[16px] leading-[140%] tracking-[0.2px]"
        >
          {{ $t("vertical_slider_text6") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.horizontal-scroll::-webkit-scrollbar {
  width: 2px;
}

.horizontal-scroll::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(255, 249, 249, 1);
  width: 3px;
}
.horizontal-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
}
</style>
