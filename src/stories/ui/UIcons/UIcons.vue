<template>
  <i v-if="name" class="icon" v-html="src" />
</template>

<script setup lang="ts">
import { onMounted, computed, getCurrentInstance } from "vue";
import icons from "@/helpers/icons";

export interface Props {
  name: string;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {});

const component = getCurrentInstance();
const src = computed(() => icons[props.name]);

onMounted(() => {
  component?.vnode.el?.querySelectorAll("path")?.forEach((item: any) => {
    // if ([...item.attributes].find((attr) => attr.localName === "stroke")) {
    //   item.attributes.stroke.value = "currentcolor";
    // }
    if ([...item.attributes].find((attr) => attr.localName === "fill")) {
      item.attributes.fill.value = "currentcolor";
    }
  });
});
</script>

<style scoped>
.icon {
  display: inline-flex;
}
.icon svg {
  width: 100%;
  height: 100%;
}
</style>
