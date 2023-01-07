<template>
  <div
    ref="isSelect"
    class="w-[70px] bg-[#ffffff33] rounded-8 z-10 text-[#ffffff99] cursor-pointer"
  >
    <div class="relative z-[100] selector">
      <div
        @click="showOptions = !showOptions"
        class="flex justify-center gap-[6.5px] py-[10px] px-[12px]"
      >
        <div
          :class="{
            ' transition duration-300 ease ': showOptions,
          }"
          class="flex icon-wrapper fill-opacity-[#fff] w-[16px] h-[16px]"
        >
          <u-icons
            name="globe_white"
            class="relative top-[-4px] w-[20px] globe !flex h-full transition duration-500 ease-in-out"
            :class="{
              ' !fill-[#fff] !fill-opacity-1 transition duration-300 ease':
                showOptions,
            }"
          />
        </div>
        <div class="text-[13px] text-white font-bold leading-[16px] uppercase">
          <span
            :class="{ 'text-white transition duration-300 ease ': showOptions }"
          >
            {{ selectedOption ? selectedOption?.title : title }}
          </span>
        </div>
      </div>
      <transition name="fade">
        <div
          v-show="showOptions"
          :class="{ 'transition duration-500 ease-in-out': showOptions }"
          class="language-window absolute z-[10] top-[25px] w-[107%] border border-solid border-[#ffffff33] rounded-lg translate-y-[13px] bg-[#ffffff33]"
        >
          <ul
            @click="showOptions = !showOptions"
            class="w-full overflow-hidden text-left list-none duration-500 ease-in-out bg-transition options-wrapper rounded-b-lg"
          >
            <li
              v-show="selectedOption != item"
              :class="{ current: item === selectedOption }"
              v-for="(item, index) in data?.results"
              :key="index"
              @click="select(item)"
              class="option flex items-center gap-[7.5px] text-[13px] font-bold leading-[16px] group transition duration-300 ease-in-out py-[8px] px-[12px]"
            >
              <div
                @click="$i18n.locale = item.title"
                class="icon-wrapper flex items-center w-[16px] h-[16px] group-hover:text-white"
              >
                <u-icons
                  name="globe_white"
                  class="flex w-full items-center h-full transition duration-500 ease-in-out text-white"
                  :class="{ current: item === selectedOption }"
                />
              </div>
              <span class="group-hover:text-white text-white">{{
                item.title
              }}</span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

export interface Props {
  data?: object;
  title?: object;
}

let showOptions = ref(false);
const selectedOption = ref("");
const emit = defineEmits<Emits>();

interface Emits {
  (option: "click:title", value: string): void;
}

withDefaults(defineProps<Props>(), {});

const select = (option: string) => {
  emit("click:title", option);
  selectedOption.value = option;
};

// ClickOutside
const isSelect = ref(null);

onClickOutside(isSelect, () => {
  showOptions.value = false;
});
</script>

<style scoped>
.current {
  color: white;
}

.language-window {
  border-top: transparent;
  border-radius: 8px;
}

/* TRANSITION */

.fade-enter-active {
  animation: fade 0.3s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.3s ease-in-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transition: 0.3s linear;
  }

  100% {
    opacity: 1;
    transition: 0.3s linear;
  }
}
</style>
