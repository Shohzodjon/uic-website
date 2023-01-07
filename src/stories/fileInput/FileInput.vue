<template>
  <div
    :class="error ? 'border-[red] error' : 'border-[transparent]'"
    class="bg-[#2E2E30] rounded-lg cursor-pointer transition duration-300 relative border-[1px]"
  >
    <div>
      <span class="text-white flex items-center pl-4 pr-2.5 py-2 rounded-lg">
        <span class="flex">
          <u-icons v-if="!file" class="" name="fileBasic" @click="openFile" />
          <u-icons v-else class="text-[#00A795]" name="uploaded" />
        </span>
        <p
          v-if="textUploadWithIcon"
          class="text-base font-medium text-[#969697] ml-[15px] w-[300px] truncate"
        >
          <span v-if="file" class="text-white"> {{ file.name }}</span>
          <span v-else @click="openFile"> {{ $t("form.cv") }} </span>
        </p>
        <p
          v-if="onlyTextUpload"
          class="text-base font-medium text-white ml-[15px] w-[300px] truncate"
        >
          <span v-if="file" class="text-white"> {{ file.name }}</span>
          <span v-else @click="openFile"> {{ $t("uploadFile") }} </span>
        </p>
        <span
          v-if="!file"
          class="w-[32px] flex-shrink-0 h-[32px] bg-[#00A795] flex items-center justify-center text-white rounded-full ml-auto cursor-pointer"
        >
          <u-icons
            class="duration-300 hover:rotate-180"
            name="plus"
            @click="openFile"
          />
        </span>
        <span
          v-else
          class="w-[32px] h-[32px] bg-[#2E2E30] text-white flex items-center justify-center rounded-full ml-auto cursor-pointer"
          @click="removeItem"
        >
          <u-icons class="hover:text-[#f22] duration-300" name="trash" />
        </span>
        <input
          ref="inputFile"
          accept="image/png, image/jpeg, .doc,.docx, .pdf, .txt"
          class="hidden"
          type="file"
          @change="handleFile"
        />
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import UIcons from "@/stories/ui/UIcons/UIcons.vue";

export interface Props {
  some: boolean;
  textUploadWithIcon: boolean;
  onlyTextUpload: boolean;
  error: any;
}

withDefaults(defineProps<Props>(), {
  textUploadWithIcon: true,
  onlyTextUpload: false,
});

const file = ref();
const inputFile = ref();
const openFile = () => {
  inputFile.value.click();
  // file.value = e.target.files[0];
};

const handleFile = (e: any) => {
  file.value = e.target.files[0];
};

// const handleChange = (e: any) => {
//   inputFile.value = e.target.files[0];
//   file.value = e.target.files[0];
//   console.log(file.value, "file");
// };

const removeItem = () => {
  file.value = null;
};
</script>
