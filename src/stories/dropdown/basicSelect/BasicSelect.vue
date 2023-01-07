<template>
  <div>
    <!-- HAS LABEL -->
    <label
      v-if="label"
      class="inline-block main-label mb-[12px] font-medium text-white font-['Roboto'] font-[16px] leading-[22px] tracking-[0.2px] line-clamp-1"
    >
      {{ $t(label || "") }}
    </label>

    <!-- DROPDOWN   -->
    <div
      ref="isSelect"
      class="select relative bg-[#202022] transition duration-300 focus:out-[#00A795] rounded-8 z-10 w-full text-[#ffffff80] cursor-pointer"
      :class="[customClass ? customClass : '', error ? 'error' : '']"
    >
      <div class="selector">
        <div
          class="selector__inner bg-[#202022] rounded-8 py-3 px-4 focus-within:border-[#00A795] focus-within:transition focus-within:ease-in-out focus-within:duration-500 focus-within:border border focus-within:border-solid border-solid border-transparent"
          @click="showOptions = !showOptions"
        >
          <div
            class="label text-[16px] font-medium font-['Roboto'] leading-[22px] tracking-[0.2px]"
          >
            <span
              :class="{
                '!text-white  transition duration-300 ease':
                  selectedOption.title,
              }"
            >
              {{}}
              {{
                selectedOption.title
                  ? $t(selectedOption?.title || "")
                  : $t(
                      title == "mobile-application"
                        ? "services.list.mobileservice"
                        : title == "websites"
                        ? "services.list.webservice"
                        : title == "design"
                        ? "services.list.uiuxservice"
                        : title == "media-production"
                        ? "services.list.mediaservice"
                        : title == "crm-systems"
                        ? "services.list.crmservice"
                        : title == "logo-branding"
                        ? "services.list.logoservice"
                        : title == "Game Development"
                        ? "services.list.gameservice"
                        : title == "Artificial Intelligence"
                        ? "services.list.intellectservice"
                        : title == "Cybersecurity"
                        ? "services.list.cyberservice"
                        : $t(title || '') || ''
                    )
              }}
            </span>
          </div>
          <div class="icon-wrapper absolute right-[23px] top-[29%]">
            <u-icons
              v-if="existArrow"
              :class="{ expanded: showOptions }"
              class="transition duration-300 ease-in-out arrow"
              name="select_arrow"
            />
          </div>
        </div>
        <transition name="fade">
          <div
            v-show="showOptions"
            :class="{ 'transition duration-300 ease-in-out': showOptions }"
            class="w-full absolute left-0 top-[63px]"
          >
            <ul
              class="options-wrapper w-full list-none h-[250px] scroll-auto text-left relative z-10 bg-[#2E2E30] rounded-8 transition duration-300 ease-in-out overflow-auto"
              @click="showOptions = !showOptions"
            >
              <li
                v-for="(item, index) in data"
                :key="index"
                :class="{
                  current: item === selectedOption || item.title == $t(title),
                }"
                class="list px-4 hover:border-t-[#ffffff1a] hover:first:border-t-transparent hover:bg-[#92929233] hover:text-[#fff]"
                @click="selectItem(item)"
              >
                <div
                  class="relative py-4 transition duration-300 ease-in-out font-['Roboto']"
                >
                  {{ $t(item?.title || "") }}
                  <u-icons
                    v-if="activeIcon"
                    :class="[
                      item.title === selectedOption.title ||
                      (item.value === title && isActive)
                        ? 'opacity-1'
                        : 'opacity-0',
                    ]"
                    class="absolute right-[0px] top-[30%]"
                    name="checked_icon"
                  />
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import UIcons from "@/stories/ui/UIcons/UIcons.vue";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import { useRoute } from "vue-router";
export interface Props {
  error?: boolean;
  label?: string;
  activeIcon?: boolean;
  existArrow?: boolean;
  data?: object;
  title: string;
  type?: string;
  value?: string;
  id?: string | number;
  customClass?: string;
  customBg?: string;
}

let showOptions = ref(false);
const selectedOption = ref("");
const route = useRoute();
let isActive = ref(true);

const emit = defineEmits<Emits>();

interface Emits {
  (option: "click:title", value: string): void;
}

withDefaults(defineProps<Props>(), {
  existArrow: true,
  required: true,
  error: false,
  activeIcon: true,
});

const selectItem = (option: string) => {
  emit("click:title", option);
  selectedOption.value = option;
  isActive.value = false;
  console.log(route.meta.title);
};

// ClickOutside
const isSelect = ref(null);

onClickOutside(isSelect, () => {
  showOptions.value = false;
});
</script>

<style scoped>
.list:after {
  content: "";
  position: absolute;
  height: 1px;
  width: 92%;
  background-color: #ffffff1a;
}

.arrow {
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.59, 1.39, 0.37, 1.01);
}

.expanded {
  transform: rotateZ(180deg) translateY(2px);
}

.current {
  color: white;
}

.error {
  border: 1px solid red;
}

/* TRANSITION */

.fade-enter-active {
  animation: fade 0.5s ease-out;
}

.fade-leave-active {
  animation: fade 0.3s ease-in-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
  }
}
</style>
