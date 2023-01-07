<template>
  <div class="container pt-[130px] photogallery--wrap" v-if="singlePhoto">
    <div
      class="w-[100%] h-[350px] lg:h-[556px] bg-no-repeat bg-cover rounded-[8px] flex flex-col justify-end p-6 md:p-12"
      :style="`background-image: linear-gradient(180deg, rgba(30, 30, 32, 0.5) 0%, #1E1E20 100%), url(${singlePhoto.main_photo_url})`"
    >
      <div
        v-html="singlePhoto.title"
        class="mt-2 text-[24px] md:text-[32px] lg:text-[40px] font-bold leading-[120%] pb-2 md:pb-6 line-clamp-3 text-[#FFFFFF]"
      />
      <hr class="" />
      <div class="flex items-center gap-10 pt-4 sm:pt-2 md:pt-6">
        <div class="hidden gap-4 sm:flex">
          <ShareNetwork
            class="tg newsSingleBlock__link"
            network="facebook"
            :url="`https://uic.group/gallery/${singlePhoto.slug}`"
            :title="singlePhoto.title"
          >
            <u-icons
              class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
              name="vacancy_facebook"
            /> </ShareNetwork
          ><ShareNetwork
            class="tg newsSingleBlock__link"
            network="twitter"
            :url="`https://uic.group/gallery/${singlePhoto.slug}`"
            :title="singlePhoto.title"
          >
            <u-icons
              class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
              name="vacancy_twitter"
            /> </ShareNetwork
          ><ShareNetwork
            class="tg newsSingleBlock__link"
            network="Telegram"
            :url="`https://uic.group/gallery/${singlePhoto.slug}`"
            :title="singlePhoto.title"
          >
            <u-icons
              class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
              name="vacancy_telegram"
            />
          </ShareNetwork>
        </div>
        <div class="flex items-center gap-3">
          <u-icons name="banner_calendar" class="text-white" />
          <p
            v-if="singlePhoto.date"
            class="text-[#A5A5A6] font-['Roboto'] leading-[19px] font-medium"
          >
            <!-- {{ singlePhoto.date.substring(0, 10) }} -->
            {{ formatDate(singlePhoto?.date.substring(0, 10), true) }}
          </p>
        </div>
        <div class="flex items-center gap-3">
          <u-icons name="time_withBg" class="text-white" />
          <p class="text-[#A5A5A6] font-['Roboto'] leading-[19px] font-medium">
            {{ singlePhoto.date.substring(11, 16) }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-7"
    >
      <div
        class="h-[199px] gallery-image cursor-pointer relative"
        v-for="(item, i) in singlePhotoGallery"
        :key="i"
        @click="showImg(i, item)"
      >
        <img
          class="h-full w-full rounded-[10px] object-cover"
          :src="item"
          alt="img"
        />
      </div>
    </div>

    <vue-easy-lightbox
      :imgs="singlePhotoGallery"
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
  <!-- FORMA -->
  <div class="bg-[#2E2E30] mt-10 mb-[107px]">
    <div class="container relative pt-10 pb-8 lg:pt-16 lg:pb-0">
      <div class="max-w-[970px] mx-auto">
        <p class="text-center lg:text-left section-title_green">
          {{ $t("problem.hey") }}...
        </p>
        <div
          class="lg:text-left text-center section-title_white mt-3 sm:pb-[50px] pb-[32px] lg:pb-[107px]"
        >
          {{ $t("problem.title") }}
        </div>
        <div
          class="lg:absolute lg:translate-y-[-50%] bg-[#252527] p-6 rounded-[24px] border-[1px] border-[#37373A] gallery-post-wrap"
        >
          <div
            v-if="!formSubmit"
            class="flex flex-col grid-cols-1 gap-5 lg:grid lg:grid-cols-11 lg:items-end"
          >
            <basic-input
              minlength="2"
              class="col-span-4"
              v-model="form.name"
              :error="vForm.name.$error"
              v-bind="{
                minLength: 2,
                backgroundColor: '#141415',
                label: $t('form.name'),
                placeholder: $t('form.nameplaceholder'),
              }"
            />
            <div class="flex flex-col col-span-4 lg:justify-end">
              <p class="mb-2 text-[#E0E0E0] font-['Roboto'] font-medium">
                {{ $t("form.phone") }}
              </p>

              <vue-tel-input
                :class="vForm.phone.$error ? '_phone-error' : ''"
                :error="vForm.phone.$error"
                v-bind="bindProps"
                v-model="form.phone"
                defaultCountry="US"
                class="py-[0.5px] h-[51px]"
                :validCharactersOnly="true"
                ref="telInput"
              ></vue-tel-input>
            </div>
            <div
              class="w-full col-span-3 flex lg:items-end justify-end flex-col lg:h-[78px] h-[44px]"
            >
              <white-button
                @click="sendForm"
                class="gallery-submit-button w-full !rounded-8 lg:h-[78px] h-[44px]"
                v-bind="{
                  title: $t('buttons.btn5'),
                  icon: 'rocket_icon',
                  customClass:
                    'h-[100%]  w-full lg:w-full !rounded-8 leading-[15px]',
                  customIconClass: '!w-auto',
                }"
              />
            </div>
          </div>
          <div
            v-else
            class="flex flex-col items-center justify-center w-full gap-3 md:flex-row md:gap-6"
          >
            <u-icons name="circle_check_green" class="text-[#00A795]" />
            <div>
              <h6
                class="font-bold text-white text-[18px] md:text-[24px] mb-2 left-[120%] text-center md:text-left"
              >
                {{ $t("popup.send") }}
              </h6>
              <p
                class="text-[#E0E0E099] text-[16px] left-[140%] text-center md:text-left"
              >
                {{ $t("popup.your_application_sent") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted } from "vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import useVuelidate from "@vuelidate/core";
import { minLength, required, maxLength } from "@vuelidate/validators";
import { useGalleryStore } from "@/stores/gallery";
import { useRoute } from "vue-router";
import { useClientFeedback } from "@/stores/client_feedback";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
const clientFeedback = useClientFeedback();
const route = useRoute();
import { useIndexStore } from "@/stores/MetaInfo";
import { useRouter } from "vue-router";

const telInput = ref(null);
const router = useRouter();
const $indexStore = useIndexStore();
const galleryStore = useGalleryStore();
const singlePhoto = computed(() => galleryStore.singlePhotoGallery);
const singlePhotoGallery = computed<string[]>(() =>
  (singlePhoto.value?.photo_list ?? []).map(
    ({ photo_url }: { photo_url: string }) => photo_url
  )
);

onMounted(() => {
  galleryStore.fetchPhotogallerySingle(route.params.slug);
  telInput.value.choose("US");
});
useOnLanguageChange(() => {
  galleryStore.fetchPhotogallerySingle(route.params.slug);
});

onMounted(() => {
  galleryStore
    .fetchPhotogallerySingle(router.currentRoute._rawValue.params.slug)
    .then(() => {
      $indexStore.setMetaInfo({
        title: singlePhoto.value?.title || "UIC gallery",
        tagName: "title",
        // title: $t("auth_meta"),
      });
    });
});
const form = reactive({
  name: "",
  phone: "",
});
const rules = {
  treatment: {
    name: { required, minLength: minLength(2) },
    phone: { required, minLength: minLength(10), maxLength: maxLength(20) },
  },
};
const vForm = useVuelidate(rules.treatment, form);
let formSubmit = ref(false);

// PHONE SETTINGS
const bindProps = {
  mode: "international",
  dropdownOptions: {
    disabledDialCode: true,
    showDialCodeInList: true,
    showFlags: true,
    showSearchBox: true,
    width: "260px",
  },
  inputOptions: {
    showDialCode: true,
    maxlength: 25,
  },
};

// SUBMIT FORM
function sendForm() {
  vForm.value.$touch();
  if (!vForm.value.$invalid) {
    clientFeedback
      .postFeedback({
        name: form.name,
        phone_number: form.phone,
      })
      .then((res) => {
        if (res.status === 201) {
          form.name = "";
          form.phone = "";
          formSubmit.value = true;
        }
      });
  }
}

// LIGHTBOX
const visible = ref(false);
const index = ref();
const showImg = (i: number) => {
  index.value = i;
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};
//  TODO Bu logika nomerni qasidavlat tanlaganda shu mamlakat nomeriga mos v-mask xona birlikni ajartish uchun qilingan edi ochirilmasin
// @country-changed="onCountryChange"
// const selectedCountry = ref("UZ");
// const onCountryChange = (country) => {
//   selectedCountry.value = country.iso;
// };

// const phoneMasks = computed(() => {
//   const masks = {
//     UZ: "### ## ##",
//     RU: "# ### ## ##",
//   };

//   const mask = masks[selectedCountry.value as keyof typeof masks];

//   return mask ? mask : "### ### ### ### ##";
// });
</script>

<style>
@media screen and (min-width: 768px) and (max-width: 1440px) {
  .gallery-submit-button svg {
    width: 32px !important;
    height: 32px !important;
  }
}

@media (max-width: 767px) {
  .gallery-submit-button svg {
    width: 16px !important;
    height: 16px !important;
  }
  .gallery-submit-button p {
    font-size: 15px !important;
  }
}
</style>
<style scoped>
.gallery-image:after {
  content: "";
  position: absolute;
  transition: all 0.3s;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 167, 149, 0) 18.41%,
    rgba(0, 167, 149, 0.7)
  );
  border-radius: 8px;
}

.gallery-image:hover:after {
  opacity: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 167, 149, 0) 18.41%,
    rgba(0, 167, 149, 0.7)
  );
}
</style>
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
