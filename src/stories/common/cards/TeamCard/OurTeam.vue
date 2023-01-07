<template>
  <div
    class="team-card group md:h-[342px] sm:h-[280px] h-[220px] relative transition ease-in-out duration-400 hover:transition hover:ease-in-out hover:duration-400"
  >
    <div
      class="team-card__shadow absolute left-0 bottom-0 w-full h-full rounded-lg transition ease-in-out duration-400 opacity-0 group-hover:transition group-hover:duration-500 group-hover:ease-in-out group-hover:opacity-100"
    ></div>
    <img
      class="w-full h-full object-fit object-cover object-top rounded-lg"
      :src="props.img"
      :alt="props.alt"
    />
    <div
      class="team-card__inner absolute left-0 bottom-0 sm:pl-2.5 pl-2 -translate-y-[150px] w-full opacity-0 transition ease-in-out duration-500 hover:transition hover:duration-500 group-hover:opacity-100 md:group-hover:translate-y-[25px] sm:group-hover:translate-y-[22px] group-hover:transition group-hover:duration-500"
    >
      <h1
        class="font-bold md:text-base sm:text-text-sm text-[13px] !leading-[130%] text-white uppercase sm:mb-1.5 mb-1 line-clamp-2 whitespace-pre-wrap"
      >
        {{ props.memberName }}
      </h1>
      <h2
        class="font-normal font-['Roboto'] md:text-base sm:text-text-sm text-[13px] !leading-[140%] text-[#e0e0e099] tracking-[0.2px] sm:line-clamp-1 line-clamp-2 whitespace-pre-wrap"
      >
        {{ props.memberPosition }}
      </h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface Props {
  img: string;
  alt: string;
  memberName: string;
  memberPosition: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped>
.team-card:hover,
.team-card,
.team-card__inner,
.team-card__shadow {
  transition: 0.4s ease-in-out;
}

.team-card__shadow {
  background-image: linear-gradient(
    180deg,
    rgba(0, 167, 149, 0) 0%,
    rgba(0, 167, 149, 0.28) 100%
  );
}

@media (max-width: 640px) {
  .team-card__shadow {
    opacity: 1;
  }

  .team-card__inner {
    transform: translateY(20px);
    opacity: 1;
  }
}
</style>
