<template>
  <div class="main-block" id="main-block">
    <!--    CONTENT-->
    <div
      v-if="true"
      class="container main-block__container absolute z-90 lg:pt-[316px] md:pt-[250px] sm:pt-[172px] pt-[172px]"
    >
      <div class="hero-info md:max-w-[506px] w-full">
        <h2
          class="text-white lg:text-[48px] lg:leading-[58px] md:text-[40px] md:leading-[50px] sm:text-[32px] sm:leading-[40px] text-[28px] leading-[34px] pb-[15px] font-bold"
          data-aos="fade-left"
          data-aos-duration="1600"
        >
          {{ $t("index.maintitle") }}
        </h2>
        <p
          class="text-[#ffffff99] uppercase tracking-[0.03em] lg:leading-[22px] lg:text-[18px] md:leading-[20px] md:text-[16px] sm:leading-[18px] sm:text-[14px] leading-[16px] text-[13px] font-medium sm:mb-[52px] mb-[32px]"
          data-aos="fade-left"
          data-aos-duration="1700"
        >
          {{ $t("index.secondtitle") }}
        </p>

        <div
          class="flex items-center gap-[16px]"
          data-aos="fade-left"
          data-aos-duration="1900"
        >
          <!-- font-sofia  -->
          <router-link class="" :to="{ name: 'PPortfolio' }" aria-label="link">
            <SButton text="buttons.btn1" button-class="font-semibold " />
          </router-link>
          <dark-button
            v-bind="{
              title: 'buttons.btn2',
              link: phoneNumber,
              customClass: '!pl-[25px] !backdrop-blur-none !border-white',
            }"
          />
        </div>
      </div>

      <!-- showreel -->
      <div
        class="w-[94px] h-[94px] scale-125 opacity-90 relative xl:mt-[173px] md:mt-[100px] sm:mt-[288px] mt-[288px] flex justify-center mx-auto showreel-wrapper cursor-pointer text-[#fff]"
        @click="closeModal"
      >
        <!-- bu funcsiya  video modalkasi yopadi -->
        <u-icons
          class="absolute z-10 flex items-center justify-center rotate-anim"
          name="showreel"
        />
        <u-icons
          class="flex items-center justify-center left-[50%]"
          name="showreel_play"
        />
      </div>
    </div>

    <!--    ANIM-->
    <div class="main-block__background">
      <span class="uic" id="uic">
        <div class="container">
          <u-icons class="uic_new" name="uic_new" />
          <!--          <img src="src/assets/image/uic_new.svg" />-->
        </div>
      </span>
      <span class="mountain" id="mountain">
        <img src="/uic-images/mountain.webp" alt="" width="1920" height="935" />
        <!--        <img src="src/assets/image/mountain.png" />-->
        <!--        <picture>-->
        <!--          <source-->
        <!--            srcset="-->
        <!--              src/assets/image/111111.avif    1x,-->
        <!--              src/assets/image/111111@2x.avif 2x-->
        <!--            "-->
        <!--            type="image/avif"-->
        <!--          />-->
        <!--          <source-->
        <!--            srcset="-->
        <!--              src/assets/image/111111.webp    1x,-->
        <!--              src/assets/image/111111@2x.webp 2x-->
        <!--            "-->
        <!--            type="image/webp"-->
        <!--          />-->
        <!--          <img-->
        <!--            src="src/assets/image/111111.png"-->
        <!--            srcset="-->
        <!--              src/assets/image/111111.png    1x,-->
        <!--              src/assets/image/111111@2x.png-->
        <!--            "-->
        <!--          />-->
        <!--        </picture>-->
      </span>
      <span id="main-bg" class="bg">
        <img src="/uic-images/main_back.webp" alt="" />
        <!--        <picture>-->
        <!--          <source-->
        <!--            srcset="-->
        <!--              src/assets/image/uic_bg.avif    1x,-->
        <!--              src/assets/image/uic_bg@2x.avif 2x-->
        <!--            "-->
        <!--            type="image/avif"-->
        <!--          />-->
        <!--          <source-->
        <!--            srcset="-->
        <!--              src/assets/image/uic_bg.webp    1x,-->
        <!--              src/assets/image/uic_bg@2x.webp 2x-->
        <!--            "-->
        <!--            type="image/webp"-->
        <!--          />-->
        <!--          <img-->
        <!--            src="src/assets/image/uic_bg.jpg"-->
        <!--            srcset="-->
        <!--              src/assets/image/uic_bg.jpg    1x,-->
        <!--              src/assets/image/uic_bg@2x.jpg-->
        <!--            "-->
        <!--          />-->
        <!--        </picture>-->
      </span>
    </div>
  </div>

  <!--  youtube video modal -->
  <div v-if="showModal" class="scale-100 opacity-100 overlay"></div>
  <transition name="fade">
    <div
      v-if="showModal"
      class="z-[9999] w-full h-screen fixed inset-0 flex items-center justify-center opacity-100 scale-100"
    >
      <div class="relative flex items-center justify-center w-full h-full">
        <button
          class="text-white absolute top-[27%] right-[2%] sm:right-[12%] sm:top-[19%] md:top-[15%] md:right-[8%] lg:top-[6%] lg:right-[10%] text-base"
          @click="closeModal"
        >
          <u-icons name="close_icon" class="close--icon" />
        </button>

        <div
          class="w-[95%] sm:w-[75%] h-[300px] sm:h-[400px] lg:h-[600px]"
          v-if="showModal"
        >
          <CLoader v-if="pending" />
          <transition name="fade">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1vx_W6o_t68"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </transition>
        </div>
      </div>
    </div>
  </transition>
  <!-- end of youtube video modal -->
</template>

<script>
import DarkButton from "@/stories/SButtons/DButton/DarkButton.vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import SButton from "@/components/Button/SButton.vue";
import CLoader from "@/components/CLoader.vue";

import { ref } from "vue";
const imgsRef = ref("");
imgsRef.value = "https://www.w3schools.com/html/mov_bbb.mp4";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useDomainVariables } from "@/composables/useDomainVariables";
gsap.registerPlugin(ScrollTrigger);

export default {
  transition: "home",
  components: {
    DarkButton,
    UIcons,
    SButton,
    CLoader,
  },

  setup() {
    const { phoneNumber } = useDomainVariables();

    return { phoneNumber };
  },
  data() {
    return {
      showModal: false,
      pending: true,
    };
  },

  mounted() {
    // console.log(window.innerWidth);
    if (window.innerWidth > 500) {
      setTimeout(() => {
        this.scrollAnimation();
      }, 200);
    }
  },
  methods: {
    scrollAnimation() {
      // let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
      gsap.timeline({
        scrollTrigger: {
          trigger: "#main-block",
          start: "top top",
          end: () =>
            `+=${
              document.querySelector("#main-block")?.clientHeight * 1.5
            } bottom`,
          markers: false,
          /*scrub: 1,*/
          pin: true,
          snap: false,
        },
      });

      gsap.to("#uic", {
        scrollTrigger: {
          trigger: "#uic",
          start: "500px center",
          end: "+=200",
          markers: false,
          scrub: 3,
          toggleActions: "play resume reverse none",
        },
        y: 200,
        duration: 2,
      });
      gsap.to("#mountain", {
        scrollTrigger: {
          trigger: "#mountain",
          markers: false,
          start: "80px center",
          end: "+=300",
          toggleActions: "play resume reverse none",
        },
        y: -230,
        duration: 2,
      });
      // gsap.to("#main-bg", {
      //   scrollTrigger: {
      //     trigger: "#main-bg",
      //     markers: false,
      //     start: "top center",
      //     // scrub: 2,
      //     end: "+=100",
      //     toggleActions: "play resume reverse none",
      //   },
      //   // y: 100,
      //   duration: 3,
      // });
    },

    // youtube video close function
    closeModal() {
      this.showModal = !this.showModal;

      if (this.showModal) {
        setTimeout(() => (this.pending = false), 1000);
        this.pending = true;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", (e) => {
          if (e.key == "Escape") {
            this.showModal = false;
            document.body.style.overflow = "auto";
          }
        });
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
.main-block__container {
  z-index: 20;
}

/*  bu modalka ni styli */

.overlay {
  width: 100vw;
  height: 100vh;
  z-index: 999 !important;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  transition: all 0.5s linear;
  left: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.active_modal {
  opacity: 1;
  transform: scale(1);
  display: block;
}

/*  bu modalka ni styli */
</style>
<style>
.uic_new svg path {
  fill: #ffffff33 !important;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rotate-anim {
  animation: rotate 7s linear infinite;
}

.main-block {
  width: 100%;
  height: 130vh;
  position: relative;
  overflow: hidden;
}
.main-block__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.main-block__background span {
  z-index: 0;
}
.main-block__background span.uic {
  position: absolute;
  top: 15%;
  right: 0;
  width: 100vw;
  height: auto;
}
.main-block__background span.uic .container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.main-block__background span.uic img {
  width: auto;
  height: auto;
}
@media (max-width: 1370px) {
  .main-block__background span.uic img {
    width: 580px;
  }
}
.main-block__background span.mountain {
  position: absolute;
  bottom: -100px;
  /*bottom: 0px;*/
  right: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /*transform: translate(0px, 150px) scale(1) !important;*/
}
.main-block__background span.mountain picture {
  width: 100%;
}
.main-block__background span.mountain img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top right;
}
.main-block__background span.mountain:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 32, 0) 0%,
    rgba(30, 30, 32, 0.53) 29.38%,
    #1e1e20 100%
  );
}
.main-block__background span.bg {
  position: absolute;
  bottom: 0;
  left: 0;
  /*top: -100px;*/
  top: -40px;
  width: 100%;
  height: 110vh;
  z-index: -2;
}
.main-block__background span.bg img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

@media (max-width: 992px) {
  .main-block__background span.uic {
    display: none;
  }
  .main-block__background span.mountain {
    transform: translate(0px, -240px) scale(1.1) !important;
  }
}
@media (max-width: 768px) {
  .main-block__background span.mountain {
    transform: translate(0px, -240px) scale(1.1) !important;
  }
}
@media (max-width: 576px) {
  .main-block__background span.mountain {
    transform: translate(0px, -240px) scale(2) !important;
  }
}
</style>
