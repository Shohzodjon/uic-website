<template>
  <div>
    <div class="flex gap-6 mb-7">
      <button
        v-for="(item, index) in tabs"
        :key="index"
        @click="activate(index), onClick"
        class="font-bold border rounded-12 transition duration-300 text-base leading-5 px-8 py-[12.5px]"
        :class="
          index == active
            ? 'text-white border-[#00A795]'
            : 'text-[#4A4B4D] border-[#4A4B4D]'
        "
        aria-label="button"
      >
        {{ item }}
      </button>
    </div>
    <!--    <div class="text-white">{{ content() }}</div>-->
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

export interface Props {
  tabs: Array<object>;
}

const active = ref(0);
// const items = ref([
//   "Content for tab 1!",
//   "Content for tab 2!",
//   "Content for tab 3!",
// ]);

interface Emits {
  (e: "click"): void;
}

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};

// const content = () => {
//   return tabs.value[active.value];
// };
const activate = (index: number) => {
  active.value = index;
};

// export class Props {}
</script>
