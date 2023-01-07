<template>
  <div class="container sm:pt-24 pt-[60px]">
    <div
      class="relative text-center our section-title_green"
      data-aos="fade-right"
      data-aos-duration="600"
    >
      {{ $t("our") }}
    </div>
    <div
      class="mb-12 text-center section-title_white"
      data-aos="fade-right"
      data-aos-duration="700"
    >
      {{ $t("team") }}
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[15px] md:gap-x-[24px] lg:gap-x-[32px] gap-y-[52px] md:gap-y-[57px]"
    >
      <our-team
        v-for="item in team"
        :key="item.id"
        data-aos="fade-up"
        data-aos-duration="700"
        v-bind="{
          img: item.photo_url,
          alt: item.name,
          memberName: item.name,
          memberPosition: item.job,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import OurTeam from "@/stories/common/cards/TeamCard/OurTeam.vue";
import { useTeamStore } from "@/stores/team";
import useOnLanguageChange from "@/composables/useOnLanguageChange";
const teamStore = useTeamStore();
const team = computed(() => teamStore.mainTeam);

onMounted(() => {
  teamStore.fetchTeam();
});
useOnLanguageChange(() => {
  teamStore.fetchTeam();
});
</script>
