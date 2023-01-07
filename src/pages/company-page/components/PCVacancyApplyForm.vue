<template>
  <div class="bg-[#1E1E20] pt-[95px] mb-[60px] xl:mb-[266px]">
    <div class="container relative form-section">
      <join-our-team
        class="xl:max-w-[1091px]"
        data-aos="fade-up"
        data-aos-duration="600"
        v-bind="{
          title: 'aboutform.title',
          text: 'aboutform.subtitle',
          customClass: 'xl:!col-span-8',
        }"
      />
      <div
        class="xl:absolute top-6 right-0 z-[1] -mt-10 md:mt-4 xl:mt-0 mx-auto font-['Roboto'] text-[#fff] w-[95%] sm:w-full xl:w-[485px] bg-[#252527] border-[#37373A] border-[1px] rounded-[12px] py-6 px-7"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div v-if="!formSubmit">
          <basic-input
            minlength="2"
            v-model="form.name"
            :error="vForm.name.$error"
            v-bind="{
              minLength: 2,
              backgroundColor: '#141415',
              type: 'text',
              placeholder: $t('introduce_yourself'),
              label: 'your_name',
            }"
          />
          <div class="mt-6">
            <p class="mb-2">{{ $t("form.phone") }}</p>
            <vue-tel-input
              v-model="form.phone"
              :show-search-box="true"
              :class="vForm.phone.$error ? '_phone-error' : ''"
              defaultCountry="US"
              :error="vForm.phone.$error"
              v-bind="bindProps"
              :validCharactersOnly="true"
              ref="telInput"
            ></vue-tel-input>
          </div>

          <basic-select
            v-model="form.vacancySelect"
            class="mt-6"
            v-bind="{
              data: vacancy,
              title: 'select_vacancy',
            }"
            @click:title="selectItem"
          />
          <file-input
            :error="vForm.file.$error"
            class="mt-6"
            @change="handleFile"
          />
          <white-button
            class="mt-7"
            v-bind="{
              customClass: '!w-full',
              title: 'send_form',
              icon: 'rocket_icon',
            }"
            @click="sendForm"
          />
        </div>
        <div v-else>
          <div class="flex flex-col justify-center rounded-xl mt-[70px]">
            <span
              class="sm:w-[138px] sm:h-[138px] w-[100px] h-[100px] bg-[#00A795] rounded-full flex items-center justify-center text-white mx-auto"
            >
              <u-icons name="tick" />
            </span>
            <h1
              class="text-white text-center mb-2 leading-[120%] md:text-2xl text-xl font-bold mt-[31px]"
            >
              {{ $t("form.success") }}
            </h1>
            <p
              class="text-[#E0E0E099] md:text-[16px] text-[14px] font-normal font-['Roboto'] leading-[140%] mb-[99px] text-center"
            >
              {{ $t("form.sucesDesc") }}
            </p>
            <button aria-label="button"></button>
            <white-button
              v-bind="{
                title: 'understandable',
                customIconClass: '!hidden',
                customClass: '!w-full !px-2 hover:!bg-[#049282]',
              }"
              @click="formSentDone"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from "vue";
import JoinOurTeam from "@/stories/common/block/JoinUs/JoinOurTeam.vue";
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import BasicSelect from "@/stories/dropdown/basicSelect/BasicSelect.vue";
import FileInput from "@/stories/fileInput/FileInput.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

import useVuelidate from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
import { useVacancyStore } from "@/stores/vacancy";
// API
const vacancyStore = useVacancyStore();
const vacancy = computed(() => vacancyStore.mainVacancy);
const telInput = ref(null);
onMounted(() => {
  vacancyStore.fetchMainVacancy("");
  telInput.value.choose("US");
});
useOnLanguageChange(() => {
  vacancyStore.fetchMainVacancy("");
});

const form = reactive({
  name: "",
  phone: "",
  file: "",
  vacancySelect: "",
});
const rules = {
  treatment: {
    name: { required, minLength: minLength(2) },
    phone: { required, minLength: minLength(10) },
    file: { required },
  },
};
const vForm = useVuelidate(rules.treatment, form);

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
    maxlength: 13,
  },
};
// TODO:tel mask set
let formSubmit = ref(false);

const handleFile = (e: any) => {
  form.file = e.target.files[0];
};

function selectItem(item: any) {
  form.vacancySelect = item.id;
}

function sendForm() {
  vForm.value.$touch();
  if (vForm.value.$invalid || !form.file) {
    formSubmit.value = false;
  } else {
    const data = new FormData();
    data.append("cv", form.file);
    data.append("vacancy", form.vacancySelect);
    data.append("phone_number", form.phone);
    data.append("name", form.name);
    vacancyStore.addVacancy(data);
    formSubmit.value = true;
  }
}

function formSentDone() {
  vForm.value.$reset();
  form.name = "";
  form.file = "";
  form.phone = "";
  form.vacancySelect = "";
  formSubmit.value = false;
}
</script>
<style scoped>
@media (max-width: 576px) {
  .form-section {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
<style>
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
.vti__dropdown-list.below,
.vti__dropdown-item {
  max-width: 300px !important;
  width: 100%;
}
.vti__dropdown-list {
  max-width: 300px !important;
  width: 100%;
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
</style>
