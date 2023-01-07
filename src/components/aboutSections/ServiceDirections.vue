<template>
  <div class="mt-10">
    <h4
      class="mb-4 about__title md:mb-8 lg:mb-10"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      {{ $t("about_page.service_direction_title") }}:
    </h4>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <router-link
        data-aos="fade-left"
        data-aos-duration="700"
        :to="item.link"
        v-for="(item, index) in cards"
        :key="index"
        class="service-card bg-[#252527] md:px-6 p-2 md:p-5 rounded-[12px] lg:min-h-[180px] border-[transparent] border-[2px] border-solid transition-all duration-300 hover:border-[#00A795]"
      >
        <h3
          class="text-[13px] md:text-[16px] lg:text-[24px] font-bold leading-[120%] mb-3"
        >
          {{ $t(item.title) }}
        </h3>
        <p
          class="text-[#E0E0E099] text-[12px] md:text-[14px] lg:text-[16px] leading-[140%]"
        >
          {{ $t(item.desc) }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  {
    title: "services.list.webservice",
    desc: "services.list.webservicepre",
    link: "/brief/websites",
  },
  {
    title: "services.list.uiuxservice",
    desc: "services.list.uiuxservicepre",
    link: "/brief/design",
  },
  {
    title: "services.list.crmservice",
    desc: "services.list.crmservicepre",
    link: "/brief/crm-systems",
  },
  {
    title: "services.list.mobileservice",
    desc: "services.list.mobileservicepre",
    link: "/brief/mobile-application",
  },
  {
    title: "services.list.mediaservice",
    desc: "services.list.mediaservicepre",
    link: "/brief/media-production",
  },
  {
    title: "services.list.logoservice",
    desc: "services.list.logoservicepre",
    link: "/brief/logo-branding",
  },
  {
    title: "services.list.cyberservice",
    desc: "services.list.cyberservicepre",
    link: "/brief/cybersecurity",
  },
  {
    title: "services.list.gameservice",
    desc: "services.list.gameservicepre",
    link: "/brief/game",
  },
  {
    title: "services.list.intellectservice",
    desc: "services.list.intellectservicepre",
    link: "/brief/ai",
  },
];
</script>

<style scoped>
.service-card {
  transition: 0.3s ease-in-out !important;
}
</style>
