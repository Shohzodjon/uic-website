import { ref, onMounted, onUnmounted } from "vue";

export function useScrollPosition() {
  const scrollPosition = ref(0);

  function update() {
    scrollPosition.value = window.pageYOffset;
  }

  onMounted(() => window.addEventListener("scroll", update));
  onUnmounted(() => window.removeEventListener("scroll", update));

  return { scrollPosition };
}
