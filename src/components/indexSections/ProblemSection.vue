<template>
  <div
    class="relative bg-[#00A795] pt-8 md:pt-12 lg:pt-16 h-[500px] xl:h-[562px] overflow-hidden"
  >
    <p
      class="text-[#FFFFFF66] uppercase text-center mb-[2px] text-[16px] leading-[164.6%] font-semibold"
    >
      {{ $t("hey") }}...
    </p>
    <p class="text-[#FFFFFF] text-[20px] font-bold leading-[150%] text-center">
      {{ $t("there_problem") }}?
    </p>
    <div
      class="text-center absolute h-[257px] top-[73px] left-[50%] translate-x-[-50%] lg:h-[450px]"
    >
      <h1 class="text-stroke text-[220px] xl:text-[280px] text-[#C4C4C4]">
        {{ $t("problem.maintext") }}
      </h1>
      <u-icons
        name="problems_icon"
        class="text-[#fff] top-[88px] left-[50%] translate-x-[-50%] absolute h-[257px]"
      />
    </div>
  </div>
  <div class="container">
    <div
      class="w-[95%] xl:w-[990px] grid grid-cols-1 lg:grid-cols-11 gap-5 bg-[#252527] rounded-[24px] p-[24px] mx-auto border-[#37373A] border-[1px] border-solid -translate-y-[50%]"
    >
      <basic-input
        minlength="2"
        class="col-span-4"
        v-bind="{
          minLength: 2,
          backgroundColor: '#141415',
          label: $t('your_name'),
          type: 'text',
          placeholder: $t('introduce_yourself'),
        }"
        :error="vForm.user_name.$error"
        v-model="userInfo.user_name"
      />

      <basic-input
        class="col-span-4"
        v-bind="{
          backgroundColor: '#141415',
          label: $t('form.phone'),
          type: 'tel',
          placeholder: $t('introduce_yourself'),
        }"
        :error="vForm.user_phone.$error"
        v-model="userInfo.user_phone"
      />

      <white-button
        class="col-span-3"
        v-bind="{
          title: $t('buttons.btn5'),
          icon: 'rocket_icon',
          customClass: 'h-[100%] w-[100%] py-[14px]',
          customIconClass: '!w-auto',
        }"
        @click="check"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useClientFeedback } from "@/stores/client_feedback";
import useVuelidate from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import BasicInput from "@/stories/ui/BasicInput/BasicInput.vue";
import WhiteButton from "@/stories/SButtons/Wbutton/WhiteButton.vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

const userInfo = reactive({
  user_name: "",
  user_phone: "",
});
const rules = {
  treatment: {
    user_name: { required, minLength: minLength(2) },
    user_phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(22),
    },
  },
};
const vForm = useVuelidate(rules.treatment, userInfo);
const clientFeedback = useClientFeedback();
function check() {
  vForm.value.$touch();
  clientFeedback
    .postFeedback({
      name: userInfo.user_name,
      phone_number: userInfo.user_phone,
    })
    .then((response) => {
      if (response.status === 201) {
        userInfo.user_name = "";
        userInfo.user_phone = "";
      }
    });
}
</script>
