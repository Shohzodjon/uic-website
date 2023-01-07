<template>
  <div class="mt-10 photogallery--wrap">
    <h4 class="mb-4 about__title" data-aos="fade-up" data-aos-duration="800">
      UIC Clan
    </h4>
    <i18n-t
      data-aos="fade-up"
      data-aos-duration="800"
      keypath="about_page.uic_clan_text"
      tag="p"
      scope="global"
      class="mb-20 about_text"
      ><template v-slot:action>
        <a
          href="https://www.youtube.com/watch?v=mFybAaWBwqo"
          target="_blank"
          class="text-[#00A795] hover:text-[#00a79587] duration-300"
          >{{ $t("about_page.uic_clan_text_link") }}</a
        >
      </template>
    </i18n-t>
    <div
      class="relative bg-[#252527] p-4 sm:p-6 md:p-8 !pt-[80px] md:pt-[116px] border-[#37373A] border-[1px] rounded-[24px] grid sm:grid-cols-2 gap-6"
    >
      <img
        src="/uic-images/about/uic-clan.svg"
        alt="uic clan logo"
        class="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        v-for="(item, index) in imgs"
        @click="showImg(index, item)"
        :key="index"
        class="border-[transparent] border-[1px] rounded-[10px] duration-300 hover:border-[#00A795] hover:translate-y-[-5px] cursor-pointer"
      >
        <img :src="item" alt="uic clan" class="w-[100%]" />
      </div>
    </div>
    <vue-easy-lightbox
      :imgs="imgs"
      :index="index"
      :visible="visible"
      @hide="handleHide"
      :maxZoom="2"
      :moveDisabled="false"
    >
      <template v-slot:prev-btn="{ prev }">
        <button @click="prev" class="lightbox--prev_slug" aria-label="button">
          <UIcons name="lightbox_arrow_right" />
        </button>
      </template>
      <template v-slot:next-btn="{ next }">
        <button @click="next" class="lightbox--next_slug" aria-label="button">
          <UIcons name="lightbox_arrow_left" />
        </button>
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
// LIGHTBOX
import { ref } from "vue";

const visible = ref(false);
const index = ref();
const showImg = (i: number) => {
  index.value = i;
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};
const imgs = [
  "/uic-images/image/uic_clan1.png",
  "/uic-images/image/uic_clan2.png",
  "/uic-images/image/uic_clan3.png",
  "/uic-images/image/uic_clan4.png",
];
</script>

<style>
.lightbox--prev_slug,
.lightbox--next_slug {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: rotateY(180deg);
}
.lightbox--next_slug {
  right: 10%;
}
.lightbox--prev_slug {
  left: 10%;
}
.photogallery--wrap .vel-modal {
  background: linear-gradient(180deg, rgba(30, 30, 32, 0.8) 0%, #1e1e20 100%);
  backdrop-filter: blur(8px);
}
.photogallery--wrap .btn__close {
  top: 10%;
  right: 10%;
}
.photogallery--wrap .btn__next {
  display: none;
}
.photogallery--wrap .btn__prev {
  display: none;
}
.photogallery--wrap .vel-toolbar {
  display: none;
}

.vel-img {
  width: 586px;
  height: 417px;
  border-radius: 12px;
}

@media (max-width: 500px) {
  .lightbox--next_slug,
  .lightbox--prev_slug {
    bottom: -10%;
  }
  .lightbox--next {
    right: 0% !important;
  }
  .lightbox--prev {
    left: 0% !important;
  }
}
@media (max-width: 767px) {
  .vel-img {
    width: auto;
    height: auto;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 15%;
  }
  .lightbox--next {
    right: 8%;
  }
  .lightbox--prev {
    left: 8%;
  }
}
@media screen and (min-width: 768px) and (max-width: 900px) {
  .vel-img {
    width: 400px;
    height: auto;
  }
}
@media screen and (min-width: 980px) and (max-width: 1059.9px) {
  .gallery-post-wrap {
    max-width: 955px;
    width: 950px;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 10%;
  }
  .lightbox--next {
    right: 15%;
  }
  .lightbox--prev {
    left: 15%;
  }
}
@media screen and (min-width: 1060px) and (max-width: 1199.9px) {
  .gallery-post-wrap {
    max-width: 991px;
    width: 990px !important;
  }
  .photogallery--wrap .btn__close {
    top: 10%;
    right: 15%;
  }
  .lightbox--next {
    right: 15%;
  }
  .lightbox--prev {
    left: 15%;
  }
}
@media screen and (min-width: 1200px) {
  .gallery-post-wrap {
    width: 100%;
    left: 10%;
    width: 990px;
  }
  .photogallery--wrap .btn__close {
    top: 7%;
    right: 15%;
  }
  .lightbox--next {
    right: 20%;
  }
  .lightbox--prev {
    left: 20%;
  }
}

.vti__dropdown {
  padding: 16px !important;
  border-radius: 8px 0 0 8px;
  transition: 0.3s ease-in-out;
}
.vti__dropdown:hover {
  /*padding: 13px !important;*/
  background-color: #2e2e30;
}
.vti__input {
  color: #fff;
  background-color: #141415;
  border-radius: 0 8px 8px 0;
}
.vue-tel-input {
  border: none;
  border-radius: 8px;
  background-color: #141415;
}
.vue-tel-input:hover .vue-tel-input:focus-within {
  box-shadow: none;
  border-color: #00a795;
}

.vti__dropdown-list {
  max-width: 300px !important;
  top: 45px !important;
  z-index: 12;
  border-radius: 8px;
  background-color: #141415;
  border: none;
}

.vti__dropdown-item.highlighted {
  background-color: #5f5f5f;
}
.vue-tel-input:focus-within {
  box-shadow: inset 0 1px 1px #00000013, 0 0 3px #00a795 !important;
  border-color: #00a795 !important;
}
.vue-tel-input {
  border: 1px solid transparent;
}
.vue-tel-input._phone-error {
  border: 1px solid red;
}

.vti__dropdown-item strong,
.vti__dropdown-item span {
  color: white;
  opacity: 0.7;
}
</style>
