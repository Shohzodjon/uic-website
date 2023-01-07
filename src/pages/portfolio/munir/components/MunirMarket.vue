<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <div
      class="max-w-[283px] w-full lg:h-[297px] md:h-[200px] sm:h-[180px] h-[180px] items-center justify-center flex font-div"
    >
      <h5
        data-aos="fade-right"
        data-aos-duration="2000"
        class="font-openSans text-center font-bold lg:text-[36px] lg:leading-[49px] md:text-[30px] md:leading-[37px] sm:text-[28px] sm:leading-[30px] text-[28px] leading-[24px] text-[#100E0E]"
      >
        Munir market
      </h5>
    </div>

    <div class="max-w-[283px] w-full">
      <p
        class="font-openSans lg:text-[20px] lg:leading-[27px] sm:text-[18px] sm:leading-[20px] text-[16px] leading-[18px] text-[#858D96] mb-3"
      >
        Regular
      </p>
      <p class="font-openSans text-[16px] leading-[22px] text-[#100E0E]">
        {{ $t("munir.prince") }}
      </p>
    </div>
    <div class="max-w-[283px] w-full">
      <p
        class="font-openSans font-semibold lg:text-[20px] lg:leading-[27px] sm:text-[18px] sm:leading-[20px] text-[16px] leading-[18px] text-[#858D96] mb-3"
      >
        Semibold
      </p>
      <p
        class="font-openSans font-semibold text-[16px] leading-[22px] text-[#100E0E]"
      >
        {{ $t("munir.prince") }}
      </p>
    </div>
    <div class="max-w-[283px] w-full">
      <p
        class="font-openSans font-bold lg:text-[20px] lg:leading-[27px] sm:text-[18px] sm:leading-[20px] text-[16px] leading-[18px] text-[#858D96] mb-3"
      >
        Bold
      </p>
      <p
        class="font-openSans font-bold text-[16px] leading-[22px] text-[#100E0E]"
      >
        {{ $t("munir.prince") }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.font-div {
  background-image: url(../images/a.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
