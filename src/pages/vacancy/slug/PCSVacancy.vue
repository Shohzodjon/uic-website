<template>
  <c-loader v-if="loading" />
  <div>
    <div v-if="showModal" class="modal-container">
      <div class="modal">
        <div class="absolute -top-[60px] right-0 sm:-right-0 text-white">
          <u-icons
            class="w-[32px] h-[32px] cursor-pointer"
            name="close_menu"
            @click="clickShowClose"
          />
        </div>

        <!--        form-->
        <div
          class="rounded-[8px] border border-[#ffffff14] flex flex-col bg-[#2B2B2E] w-[350px] text-white md:w-[700px] justify-center lg:w-[890px] xl:w-[990px] gap-8 px-7 py-6 h-full"
        >
          <div v-if="formSubmit" class="flex flex-col gap-8">
            <div class="flex flex-col justify-center w-full gap-8 md:flex-row">
              <basic-input
                minlength="2"
                v-model="form.name"
                :error="vForm.name.$error"
                class="w-full md:w-1/2"
                v-bind="{
                  minLength: 2,
                  height: '48px',
                  backgroundColor: '#14141575',
                  type: 'text',
                  placeholder: $t('enter_your_name'),
                  label: $t('fio'),
                }"
              />
              <div class="w-full md:w-1/2">
                <p class="mb-3">{{ $t("form.phone") }}</p>
                <vue-tel-input
                  v-model="form.phone"
                  :class="vForm.phone.$error ? '_phone-error' : ''"
                  defaultCountry="US"
                  :error="vForm.phone.$error"
                  :validCharactersOnly="true"
                  class="h-[48px]"
                  v-bind="bindProps"
                  @validate="handleValidation"
                  ref="telInput"
                ></vue-tel-input>
              </div>
            </div>
            <div class="flex flex-col w-full gap-8 md:flex-row">
              <div class="w-full md:w-1/2">
                <!-- change  -->
                <basic-select
                  v-model="form.vacancySelect"
                  :error="vForm.vacancySelect.$error"
                  v-bind="{
                    data: vacancy,
                    title: 'select_vacancy',
                  }"
                  @click:title="selectItem"
                />
              </div>

              <div class="w-full md:w-1/2">
                <file-input :error="vForm.cv.$error" @change="handleFile" />
              </div>
            </div>
            <white-button
              v-bind="{
                customClass: 'whitespace-nowrap ml-auto',
                title: this.$t('send_form'),
                icon: 'rocket_icon',
              }"
              @click="addVacancy"
            />
          </div>
          <div
            v-else
            class="flex flex-col md:flex-row gap-2 justify-center items-center h-[200px] md:h-[312px]"
          >
            <span
              class="w-[38px] h-[38px] md:w-[55.31px] md:h-[55.31px] bg-[#00A795] rounded-full flex items-center justify-center text-white"
            >
              <u-icons class="w-4 md:w-[24.3px]" name="tick" />
            </span>
            <div class="ml-6">
              <h1
                class="text-white text-center md:text-start mb-2 leading-[120%] md:text-2xl text-xl font-bold"
              >
                {{ $t("popup.send") }}
              </h1>
              <p
                class="text-[#E0E0E099] md:text-[16px] text-[14px] font-normal font-['Roboto'] leading-[140%] text-center md:text-start"
              >
                {{ $t("popup.your_application_sent") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  container-->
    <div class="container pt-[150px] md:pt-[170px] lg:pt-[180px]">
      <!-- :date_from="
          vacancyId?.from_day ? $t(date[vacancyId?.from_day]) : 'qewd'
        "
        :date_to="vacancyId?.to_day ? $t(date[vacancyId?.to_day]) : 'asdas'" -->
      <vacancy-slug :vacancyId="vacancyId" />
      <div class="flex gap-4 mt-8 sm:hidden">
        <u-icons
          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
          name="vacancy_facebook"
        />
        <u-icons
          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
          name="vacancy_twitter"
        />
        <u-icons
          class="group hover:hover:text-[#00A795] text-[#AAAAAB] transition duration-300"
          name="vacancy_telegram"
        />
      </div>
      <div class="max-w-[990px] mx-auto pb-10">
        <h3 class="pt-8 text-2xl text-white">{{ $t("requirements") }}</h3>
        <p
          class="vacancy-conditions mt-[14px] text-base text-[#E0E0E0]"
          v-html="vacancyId.requirements"
        ></p>

        <h3 class="pt-8 text-2xl text-white">{{ $t("duties") }}</h3>
        <p
          class="vacancy-conditions mt-[14px] text-base text-[#E0E0E0]"
          v-html="vacancyId.tasks"
        ></p>

        <h3 class="pt-8 text-2xl text-white">{{ $t("musts") }}</h3>
        <p
          class="vacancy-conditions mt-[14px] text-base text-[#E0E0E0]"
          v-html="vacancyId.conditions"
        ></p>
        <div class="md:w-[230px] w-[168px]">
          <white-button
            class="mt-8"
            v-bind="{
              title: 'buttons.btn8',
              customClass: '!rounded-8 whitespace-nowrap !md:pl-2 !pl-2',
            }"
            @click="clickShow"
          />
        </div>
      </div>
    </div>

    <div class="photogallery py-[40px]">
      <div class="container !px-0 md:!px-[15px]">
        <div class="text-center section-title_green">
          {{ $t("gallery.subtitle") }}
        </div>
        <div class="section-title_white text-center mb-[32px]">
          {{ $t("gallery.title") }}
        </div>
        <gallery-card-slider
          :photogallery="photogallery"
          data-aos="fade-up"
          data-aos-duration="700"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VacancySlug from "@/stories/VacancySlug/VacancySlug.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import GalleryCardSlider from "@/stories/GalleryCardSlider/GalleryCardSlider.vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import BasicSelect from "@/stories/dropdown/basicSelect/BasicSelect.vue";
import FileInput from "@/stories/fileInput/FileInput.vue";
import CLoader from "@/components/CLoader.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import { computed, onMounted, reactive, ref } from "vue";

import { useGalleryStore } from "@/stores/gallery";
import { useVacancyStore } from "@/stores/vacancy";
import { useRoute } from "vue-router";
import { minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";
import { useRouter } from "vue-router";

const galleryStore = useGalleryStore();
const vacancyStore = useVacancyStore();
const globalStore = useGlobalStore();
const photogallery = computed(() => galleryStore.mainPhotogallery);
const vacancy = computed(() => vacancyStore.mainVacancy);
const vacancyId = computed(() => vacancyStore.mainVacancyId);

const router = useRouter();
const $indexStore = useIndexStore();
const route = useRoute();
const telInput = ref(null);
const form = reactive({
  name: "",
  phone: "",
  vacancySelect: "",
  cv: "",
});
const rules = {
  treatment: {
    name: { required, minLength: minLength(3) },
    phone: { required, minLength: minLength(10) },
    cv: { required },
    vacancySelect: { required },
  },
};
const vForm = useVuelidate(rules.treatment, form);
const loading = ref(true);
const telInputValidation = ref();
const handleValidation = (e: any) => {
  telInputValidation.value = e;
};
const formSubmit = ref(true);
const handleFile = (e: any) => {
  form.cv = e.target.files[0];
};

function selectItem(item: any) {
  form.vacancySelect = item.id;
}

onMounted(() => {
  galleryStore.fetchPhotogallery();
  vacancyStore.fetchMainVacancy("");
  vacancyStore
    .fetchMainVacancyId(route.params.slug)
    .then(() => {
      globalStore.openLoad(loading);
    })
    .finally(() => {
      setTimeout(() => (loading.value = false), 300);
    });
  // telInput.value.choose("US");
});

useOnLanguageChange(() => {
  galleryStore.fetchPhotogallery();
  vacancyStore.fetchMainVacancy("");
  vacancyStore.fetchMainVacancyId(route.params.slug);
});
onMounted(() => {
  // console.log("sf", vacancyId.value?.title);
  vacancyStore
    .fetchMainVacancyId(router.currentRoute._rawValue.params.slug)
    .then(() => {
      globalStore.openLoad(loading);
      $indexStore.setMetaInfo({
        title: vacancyId.value?.title || "Vacancy UIC",
        tagName: "title",
        // title: t("auth_meta"),
      });
    });
});
const showModal = ref(false);

const clickShow = () => {
  showModal.value = true;
  document.documentElement.style.overflow = "hidden";
};
const addVacancy = () => {
  vForm.value.$touch();
  if (vForm.value.$invalid || !form.cv) {
    formSubmit.value = true;
  } else {
    const data = new FormData();
    data.append("cv", form.cv);
    data.append("vacancy", form.vacancySelect);
    data.append("phone_number", form.phone);
    data.append("name", form.name);
    vacancyStore
      .addVacancy(data)
      .then(() => {
        formSubmit.value = false;
      })
      .catch(() => {
        formSubmit.value = true;
      });
  }
};

const clickShowClose = () => {
  showModal.value = false;
  document.documentElement.style.overflow = "auto";
  vForm.value.$reset();
  form.name = "";
  form.cv = "";
  form.phone = "";
  form.vacancySelect = "";
  formSubmit.value = true;
};
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
</script>
<style scoped>
.vacancy-conditions span {
  color: white !important;
}
.modal-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 32, 0.88);
  backdrop-filter: blur(16px);
  z-index: 10000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  z-index: 998;
  background: #2b2b2e;
  border-radius: 8px;
  position: relative;
  font-family: "Roboto";
  font-style: normal;
}

.photogallery {
  background-image: linear-gradient(
      180deg,
      rgba(92, 102, 112, 0) 0%,
      rgba(25, 25, 26, 0.74) 20%,
      rgba(25, 25, 26, 1) 30%,
      rgba(25, 25, 26, 1) 50%,
      rgba(30, 30, 32, 1) 50%,
      rgba(30, 30, 32, 1) 100%
    ),
    url("@/assets/image/photogallery-bg.png");
  background-size: contain;
}

@media screen and (min-width: 370px) and (max-width: 575.9px) {
  .modal {
    top: 5%;
  }
}

@media screen and (min-width: 576px) and (max-width: 767.9px) {
  .modal {
    top: 7%;
  }
}

@media screen and (min-width: 768px) and (max-width: 991.9px) {
  .modal {
    top: 8%;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199.9px) {
  .modal {
    top: 6%;
  }
}

@media screen and (min-width: 1200px) {
  .modal {
    top: 3%;
  }
}
</style>
<style>
.vacancy-conditions span {
  color: #e0e0e0 !important;
  letter-spacing: 0.2px;
}
.vti__dropdown {
  padding: 13px !important;
  border-radius: 8px 0 0 8px;
  transition: 0.3s ease-in-out;
}

.vti__dropdown:hover {
  padding: 13px !important;
  background-color: #2e2e30;
}

.vti__input {
  background-color: rgba(20, 20, 21, 0) !important;
  border-radius: 0 8px 8px 0;
}

.vue-tel-input {
  border: none;
  transition: 0.3s ease-in-out;
  border-radius: 8px;
  background-color: rgba(20, 20, 21, 0.46);
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
</style>
