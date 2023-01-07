<template>
  <div class="w-[100%] !overflow-hidden">
    <div v-if="showModal" class="modal-container">
      <div class="modal">
        <div class="absolute -top-[52px] right-0 text-white">
          <u-icons
            class="w-[32px] h-[32px] cursor-pointer"
            name="close_menu"
            @click="clickShowClose"
          />
        </div>

        <div
          class="flex items-center flex-col w-[350px] text-white md:w-[700px] justify-center lg:w-[788px] px-10 lg:px-[101px] py-6 md:py-11 h-full"
        >
          <div class="flex items-center sm:space-x-4">
            <div class="w-12 divider-y lg:w-4 md:w-8 sm:w-8"></div>
            <p
              class="text-[#00A795] text-[16px] sm:leading-[19px] leading-[21px] tracking-[0.03em] font-bold uppercase text-center"
            >
              Brief
            </p>
            <i18n-t
              v-if="false"
              keypath="brief_subtitle"
              tag="p"
              scope="global"
              class="text-[#00A795] text-[16px] sm:leading-[19px] leading-[21px] tracking-[0.03em] font-bold uppercase text-center"
              ><template v-slot:action>{{
                $t(
                  briefType == "mobile-application"
                    ? "services.list.mobileservice"
                    : briefType == "websites"
                    ? "services.list.webservice"
                    : briefType == "design"
                    ? "services.list.uiuxservice"
                    : briefType == "media-production"
                    ? "services.list.mediaservice"
                    : briefType == "crm-systems"
                    ? "services.list.crmservice"
                    : briefType == "logo-branding"
                    ? "services.list.logoservice"
                    : briefType == "Game Development"
                    ? "services.list.gameservice"
                    : briefType == "Artificial Intelligence"
                    ? "services.list.intellectservice"
                    : briefType == "Cybersecurity"
                    ? "services.list.cyberservice"
                    : "briefType"
                )
              }}</template>
            </i18n-t>
            <div class="w-12 divider-y lg:w-4 md:w-8 sm:w-8"></div>
          </div>

          <div
            class="align-baseline inline-block w-[235px] sm:w-full sm:items-center !items-start justify-center md:text-[36px] text-center sm:text-28px md:leading-[43px] leading-[34px] text-[28px] mt-2 sm:gap-2 gap-0"
          >
            <img
              src="@/assets/image/shake.png"
              alt="shake"
              class="inline-block w-[34px] h-[32px] mr-[4px] mb-[8px]"
            />
            <span class="inline-block"> {{ $t("success_send") }}</span>
          </div>
          <p
            class="mt-4 md:mt-8 text-center text-sm md:text-base font-normal tracking-[0.2px] leading-140 modal--text"
          >
            {{ $t("popup.send_call") }}
          </p>
          <i18n-t
            v-if="false"
            keypath="brief_title"
            tag="p"
            scope="global"
            class="mt-4 md:mt-8 text-center text-sm md:text-base font-normal tracking-[0.2px] leading-140 modal--text"
            ><template v-slot:action>
              {{
                $t(
                  briefType == "mobile-application"
                    ? "services.list.mobileservice"
                    : briefType == "websites"
                    ? "services.list.webservice"
                    : briefType == "design"
                    ? "services.list.uiuxservice"
                    : briefType == "media-production"
                    ? "services.list.mediaservice"
                    : briefType == "crm-systems"
                    ? "services.list.crmservice"
                    : briefType == "logo-branding"
                    ? "services.list.logoservice"
                    : briefType == "Game Development"
                    ? "services.list.gameservice"
                    : briefType == "Artificial Intelligence"
                    ? "services.list.intellectservice"
                    : briefType == "Cybersecurity"
                    ? "services.list.cyberservice"
                    : "briefType"
                )
              }}
            </template>
          </i18n-t>
          <router-link
            class="backTo font-family-inherit sm:text-white sm:font-bold font-semibold text-[#ffffff99] mt-6 md:mt-12 sm:leading-[21px] leading-[16px] md:text-base sm:text-base text-[13px] py-3 md:py-[14px] px-6 md:px-8 border border-[#4B4B4D] text-center tracking-[0.03em] hover:text-[#99999A] rounded-xl hover:border-[#00A795] transition duration-150 ease-out"
            to="/"
          >
            {{ $t("back_to_main") }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="container !pb-12 md!pb-36 pt-[64px]">
      <div>
        <div>
          <p class="text-[#00A795] text-base uppercase">
            {{ $t("form.subtitle") }}
          </p>
          <h3 class="mt-2 text-4xl text-white">
            {{
              $t(
                route.name == "mobile-application"
                  ? "services.list.mobileservice"
                  : route.name == "websites"
                  ? "services.list.webservice"
                  : route.name == "design"
                  ? "services.list.uiuxservice"
                  : route.name == "media-production"
                  ? "services.list.mediaservice"
                  : route.name == "crm-systems"
                  ? "services.list.crmservice"
                  : route.name == "logo-branding"
                  ? "services.list.logoservice"
                  : route.name == "Game Development"
                  ? "services.list.gameservice"
                  : route.name == "Artificial Intelligence"
                  ? "services.list.intellectservice"
                  : route.name == "Cybersecurity"
                  ? "services.list.cyberservice"
                  : "services.title"
              )
            }}
          </h3>
        </div>
        <div class="grid grid-cols-12 mt-12 space-y-4 lg:space-y-0">
          <div class="flex col-span-12 lg:col-span-3">
            <p class="text-base text-[#939393]">
              {{ $t("general_form_description") }}
            </p>
            <div class="h-full w-0 lg:w-px bg-[#343436] mx-5"></div>
          </div>
          <div
            class="col-span-12 lg:col-span-9 rounded-lg p-2 md:px-7 md:pt-6 md:pb-7 md:bg-[#2B2B2E]"
          >
            <div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
                <basic-input
                  minlength="2"
                  v-model="form.company_name"
                  :error="vForm.company_name.$error"
                  v-bind="{
                    minLength: 1,
                    height: '48px',
                    backgroundColor: '#141415',
                    type: 'text',
                    placeholder: $t('form.companyplaceholder'),
                    label: 'company_name',
                  }"
                />
                <basic-input
                  v-model="form.fullname"
                  :error="vForm.fullname.$error"
                  v-bind="{
                    minLength: 2,
                    height: '48px',
                    backgroundColor: '#141415',
                    type: 'text',
                    placeholder: $t('form.nameplaceholder'),
                    label: 'form.name',
                  }"
                />
                <div class="text-white">
                  <p class="mb-2">{{ $t("form.phone") }}</p>
                  <vue-tel-input
                    v-model="form.phone_number"
                    :class="vForm.phone_number.$error ? 'phone-error' : ''"
                    defaultCountry="US"
                    :error="vForm.phone_number.$error"
                    :validCharactersOnly="true"
                    class="h-[48px] !bg-[#141415]"
                    v-bind="bindProps"
                    @validate="handleValidation"
                    ref="telInput"
                  ></vue-tel-input>
                </div>

                <div class="text-white">
                  <p class="mb-2">{{ $t("form.type_of_project") }}</p>
                  <basic-select
                    class="projects-select"
                    v-model="form.project_type"
                    v-bind="{
                      data: vacancy,
                      title: form.project_type,
                      customClass: '!bg-[#141415] ',
                    }"
                    @click:title="selectItem"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 text-white mt-7">
                <p class="mb-2">{{ $t("form.project_desc") }}</p>
                <textarea
                  v-model="form.description"
                  :class="
                    vForm.description.$error
                      ? 'border-[1px] border-red-500'
                      : 'border-[1px] border-[#202022]'
                  "
                  :error="vForm.description.$error"
                  :placeholder="$t('form.briefprojectplaceholder')"
                  class="bg-[#141415] resize-none rounded-lg h-[108px] px-[14px] py-[13px] focus:border-[1px] focus:border-[#00A795]"
                  maxlength="300"
                  type="text"
                />
              </div>
              <div class="w-full h-px bg-[#343436] my-7"></div>
              <div class="w-[200px] ml-auto">
                <white-button
                  v-bind="{
                    title: 'buttons.btn6',
                    customClass: 'whitespace-nowrap ml-auto',
                    icon: 'rocket_icon',
                  }"
                  @click="addClickForm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";
import { onMounted, reactive, ref, watch } from "vue";
import BasicSelect from "@/stories/dropdown/basicSelect/BasicSelect.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import { useRoute } from "vue-router";
import { useBriefStore } from "@/stores/brief";
import { maxLength, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useGlobalStore } from "@/stores/global";
import { useIndexStore } from "@/stores/MetaInfo";

// import { useRouter } from "vue-router";
const telInput = ref("null");
const globalStore = useGlobalStore();
const $indexStore = useIndexStore();

const loading = ref(false);
onMounted(() => {
  globalStore.openLoad(loading);
  telInput.value.choose("US");
});

const briefStore = useBriefStore();
const route = useRoute();

const briefType = ref(route.name);

function selectItem(item: any) {
  form.project_type = item.value;
  briefType.value = item.value;
}
const telValidation = ref();

const handleValidation = (e: any) => {
  telValidation.value = e;
};
const vacancy = [
  { title: "services.list.webservice", id: "websites", value: "WEBSITE" },
  {
    title: "services.list.mobileservice",
    id: "mobile-application",
    value: "MOBILE APP",
  },
  { title: "services.list.uiuxservice", id: "design", value: "UI/UX DESIGN" },
  {
    title: "services.list.mediaservice",
    id: "media-production",
    value: "MEDIAN PRODUCTION",
  },
  { title: "services.list.crmservice", id: "crm-systems", value: "CRM" },
  {
    title: "services.list.logoservice",
    id: "logo-branding",
    value: "LOGOBRANDING",
  },
  {
    title: "services.list.intellectservice",
    id: "artificial-intelligence",
    value: "Artificial Intelligence",
  },
  {
    title: "services.list.cyberservice",
    id: "cybersecurity",
    value: "Cybersecurity",
  },
  {
    title: "services.list.gameservice",
    id: "game-development",
    value: "Game Development",
  },
];

const form = reactive({
  company_name: "",
  fullname: "",
  phone_number: "",
  project_type: route.meta.title,
  description: "",
});

const rules = {
  treatment: {
    company_name: { required, minLength: minLength(2) },
    fullname: { required, minLength: minLength(2) },
    phone_number: {
      required,
      minLength: minLength(10),
      maxlength: maxLength(20),
    },
    description: { required, minLength: minLength(3) },
  },
};

const vForm = useVuelidate(rules.treatment, form);
const formSubmit = ref(true);
const showModal = ref(false);

// REMOVE SCROLL FROM BODY
watch(showModal, (currentValue: any) => {
  if (currentValue) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflow = "auto";
  }
});

const addClickForm = () => {
  vForm.value.$touch();
  if (!vForm.value.$invalid) {
    formSubmit.value = true;
    briefStore
      .addBrief(form)
      .then(() => {
        formSubmit.value = true;
        showModal.value = true;
      })
      .catch(() => {
        formSubmit.value = true;
      });
  }
};

const clickShowClose = () => {
  // (form.company_name = ""),
  //   (form.fullname = ""),
  //   (form.phone_number = ""),
  //   (form.description = ""),
  vForm.value.$reset();
  showModal.value = false;
  document.documentElement.style.overflow = "auto";
  window.location.reload();
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

onMounted(() => {
  $indexStore.setMetaInfo({
    title: "Brief " + briefType.value,
    tagName: "title",
    // title: t("auth_meta"),
  });
});
</script>

<style>
.projects-select .selector__inner {
  background-color: #141415 !important;
}
</style>
<style scoped>
.phone-error {
  border: 1px solid red;
}
@media (max-width: 450px) {
  .backTo {
    text-transform: uppercase;
  }
}

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  background: rgba(30, 30, 32, 0.88);
  backdrop-filter: blur(16px);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  z-index: 998;
  background: #2e2e30;
  border-radius: 8px;
  position: relative;
  top: 0;
  font-family: "Roboto";
  font-style: normal;
}

.divider-y {
  background-color: #585859;
  height: 2px;
}
.modal--text {
  color: rgba(224, 224, 224, 0.6) !important;
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
</style>
