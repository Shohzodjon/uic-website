<template>
  <div class="pt-10 md:pb-[284px] sm:pb-[120px] pb-[136px] hero">
    <div class="container">
      <div class="text-center container__inner">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          class="mx-auto w-[103px] h-[150px] mb-7"
          src="../images/munir-logo.png"
          alt="munir-logo"
        />

        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          class="sm:text-[20px] sm:leading-[26px] text-[16px] leading-[22px] text-[#4D5870] mb-5 max-w-[975px] w-full mx-auto"
        >
          {{ $t("munir.hero_text") }}
        </p>

        <a
          data-aos="fade-up"
          data-aos-duration="1400"
          class="inline-block w-[180px] font-medium text-[20px] leading-[26px] mx-auto bg-[#F07C29] rounded-6 px-[3px] pt-[12px] pb-[9px] text-white"
          href="http://www.munir.com"
          target="_blank"
        >
          <span class="inline-block line-1 anim-typewriter w-[180px]">
            www.munir.com</span
          >
        </a>

        <!-- SPENT TIME COMPONENT -->
        <spent-time
          data-aos="fade-up"
          data-aos-duration="1600"
          class="mx-auto my-5 text-center"
          v-bind="{
            title: 'Sarflangan',
            time: 'vaqt',
            spentTime: '38 ish kuni',
          }"
        />

        <div
          class="flex justify-center find-us space-x-0 mb-[66px] flex-wrap sm:flex-wrap md:gap-[28px] sm:gap-[20px] gap-5"
        >
          <a
            data-aos="fade-up"
            data-aos-duration="1500"
            class="inline-block transition duration-300 group"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="sm:w-[178px] w-[140px] h-[52px] object-contain transition duration-500 group-hover:translate-y-[-10px]"
              src="../images/app-store.png"
              alt="app store button"
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1700"
            class="inline-block group"
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="sm:w-[178px] w-[140px] h-[52px] object-contain transition duration-500 group-hover:translate-y-[-10px]"
              src="../images/google-play.png"
              alt="google play button"
            />
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1900"
            class="inline-block group"
            href="https://appgallery.huawei.com/Featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="sm:w-[175px] w-[140px] h-[52px] object-contain transition duration-500 group-hover:translate-y-[-10px]"
              src="../images/app-gallery.png"
              alt="app gallery button"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpentTime from "../components/SpentTime.vue";
</script>
<style scoped>
.line-1 {
  position: relative;
  top: 50%;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 800ms steps(60) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 170px;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 1);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
