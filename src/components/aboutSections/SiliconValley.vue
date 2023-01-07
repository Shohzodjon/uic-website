<template>
  <div
    class="silicon-valley font-['Roboto'] my-10 flex flex-col justify-between p-5 md:px-8 md:pt-[26px] md:pb-8 rounded-[24px] min-h-[332px] border-[1px] border-[#37373A]"
  >
    <div class="max-w-[550px]">
      <h3
        class="text-[20px] font-bold leading-[140%] tracking-[0.2px] mb-3 md:mb-5"
      >
        {{ $t("about_page.silicon_valley_text") }}
      </h3>
      <i18n-t
        keypath="about_page.silicon_valley_text_desc"
        tag="p"
        scope="global"
        class="text-[14px] md:text-[16px] leading-[140%] font-medium mb-32 sm:mb-10"
        ><template v-slot:action>
          <span class="text-[#00A795]">{{ $t("about_page.sv_location") }}</span>
        </template>
      </i18n-t>
    </div>
    <i18n-t
      keypath="about_page.silicon_valley_text_desc2"
      tag="p"
      scope="global"
      class="max-w-[820px] text-[#FFFFFF80] leading-[144%] text-[14px] md:text-[16px]"
      ><template v-slot:action>
        <span class="text-[#fff]">{{ $t("about_page.company_grants") }}</span>
      </template>
    </i18n-t>
  </div>
</template>
<!--siliconvalley-->

<style scoped>
.silicon-valley {
  background-image: url("/uic-images/image/siliconvalley.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}
@media (max-width: 700px) {
  .silicon-valley {
    background-position: right -140px center;
  }
}
</style>
