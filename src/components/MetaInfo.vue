<template>
  <teleport to="head">
    <pre>{{ data }}</pre>
    <title>{{ data?.title }}</title>
    <meta name="description" :content="data?.description" />
  </teleport>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        title: "UIC group",
        description: "Ishonchli, tezkor va sifatli!",
      };
    },
  },
});
</script>
