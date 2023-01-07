<template>
  <div class="bg-white search font-openSans text-[#100E0E] overflow-hidden">
    <div class="container">
      <!-- Uzor -->
      <img
        class="flex justify-center max-w-[607px] w-full mx-auto max-h-[101px] h-full text-center xl:mb-[125px] sm:mb-[64px] mb-[64px]"
        src="../images/divider-pattern.png"
        alt=""
      />

      <div
        class="static flex flex-col justify-end gap-5 lg:relative xl:flex-row md:flex-col sm:flex-col"
      >
        <div
          class="xl:absolute md:static sm:static static xl:left-[-504px] lg:left-[-480px] md:left-0 sm:left-0 left-0 mx-auto"
        >
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            class="xl:max-w-[955px] lg:max-w-[850px] md:max-w-[600px] sm:max-w-[500px] max-w-[450px] w-full xl:max-h-[581px] lg:max-h-[500px] md:max-h-[400px] h-full"
            src="../images/search-macbook.png"
            alt="macbook"
          />
        </div>

        <div
          class="xl:max-w-[586px] sm:max-w-full max-w-full relative w-full flex-shrink-0"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="1700"
            class="flex flex-col pt-[40px]"
          >
            <div class="flex items-center mb-6">
              <img
                class="w-[3px] h-[44px]"
                src="../images/stick.png"
                alt="stick"
              />
              <h4 class="ml-3 font-bold text-[32px] leading-[44px]">
                {{ $t("munir.search") }}
              </h4>
            </div>

            <p
              class="font-semibold sm:text-[20px] sm:leading-[26px] text-[16px] leading-[21px]"
            >
              {{ $t("munir.search_text") }}
            </p>
          </div>
          <div
            class="relative xl:top-[72px] lg:top-[40px] top-[40px] xl:max-w-[272px] lg:max-w-[240px] sm:max-w-[200px] max-w-[140px] xl:max-h-[590px] lg:max-h-[440px] sm:max-h-[350px] max-h-[240px] w-full mx-auto h-full"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              class="flex w-full h-full"
              src="../images/search-phone.png"
              alt="iphone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
