<template>
  <div>
    <a
      :class="customClassLink ? customClassLink : ''"
      class="inline-block w-[148px] font-semibold text-[14px] leading-[17px] bg-[#D12E56] rounded-8 px-[24px] py-[12px] text-white"
      href="http://www.safenetpay.com"
      target="_blank"
    >
      <span class="inline-block line-1 anim-typewriter"> {{ link }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  link: string;
  customClassLink: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style>
.line-1 {
  position: relative;
  top: 50%;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter {
  animation: typewriter 4s steps(24) 1s 1 normal both,
    blinkTextCursor 800ms steps(24) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  /* Width will may be changed according to UI*/
  to {
    width: 105px;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 1);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
