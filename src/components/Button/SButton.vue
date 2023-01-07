<template>
  <button
    class="s-button rounded-12 lg:text-[16px] text-[13px] py-[10px] lg:!pl-6 sm:pl-4 pl-4 pr-3 md:!pr-3 md:text-[16px] sm:text-[13px] md:py-[11px] sm:py-[10px] lg:!pt-3 lg:!pb-3 flex items-center justify-center cursor-pointer transition duration-300 group"
    v-bind="{ disabled, type }"
    @click="onClick"
    aria-label="button"
  >
    <slot>
      <div :class="buttonClass" class="flex items-center gap-4">
        <span :class="textStyle" class="sm:text-[16px] text-[13px]">
          {{ $t(text) }}
        </span>

        <span
          :class="icon"
          class="icon-arrow bg-[#4CC1B5] transition duration-300 !text-[13px] md:text-base ease-in-out rounded-full w-4 h-4 md:!w-6 md:!h-6 flex items-center justify-center group-hover:rotate-45"
        ></span>
      </div>
    </slot>
  </button>
</template>

<script lang="ts" setup>
// ******* PROPS *******

export interface Props {
  text?: string;
  spinnerColor?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: string;
  icon?: string;
  iconClass?: string;
  buttonClass?: string;
}

withDefaults(defineProps<Props>(), {
  hasShadow: true,
  text: "Button",
  spinnerColor: "white",
  disabled: false,
  loading: false,
  icon: "icon-arrow",
});

// ******* EMITS *******
interface Emits {
  (e: "click"): void;
}

const emit = defineEmits<Emits>();

const onClick = () => {
  emit("click");
};
</script>

<style>
.s-button {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: #ffffff;
  background: #1a8377;
  border: 2px solid #00a795;
}

.s-button:hover {
  background: #00a795;
}
</style>
