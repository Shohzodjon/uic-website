<template>
  <div v-for="(item, i) in briefTab" :key="i" :index="(index = i)">
    <div class="relative w-[262px] h-[62px] flex items-center overflow-hidden">
      <div
        v-if="count === item.id"
        class="w-10 h-10 -left-[30px] rounded-full h-5 bg-[#00A795] absolute"
      ></div>
      <div
        :class="[
          count === i ? '!text-white' : '',
          count > i ? 'bg-[#00A795] text-white' : 'bg-[#2B2B2E] text-[#666667]',
        ]"
        class="w-[70%] h-full rounded-lg flex items-center pl-5 text-[32px]"
      >
        {{ item.id }}
        <!--            <span class="text-[10px]">{{ count }}</span>-->
      </div>
      <div
        :class="[
          count === i
            ? ' border border-[#00A795] !text-white'
            : 'border border-[#37373A] text-[#666667]',
          count > i ? '!text-white' : '',
        ]"
        class="flex items-center absolute w-[80%] h-[42px] right-0 bg-[#252527] rounded-lg pl-4 text-base"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      :class="[
        briefTab.length === item.id ? 'hidden' : 'block',
        count === i + 1 ? 'bg-[#00A795]' : 'bg-[#2B2B2E]',
        count > i ? '!bg-[#00A795]' : '',
      ]"
      class="h-[70px] w-px ml-5"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

export interface Props {
  briefTab: {
    id?: number;
    name?: string;
  }[];
  count: {
    count?: number;
  };
}

withDefaults(defineProps<Props>(), {});

const index = ref(0);
</script>
