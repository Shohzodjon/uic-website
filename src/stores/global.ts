import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalId", {
  state: () => ({
    loading: true,
  }),
  actions: {
    async openLoad(loading: any) {
      if (loading) {
        this.loading = false;
      } else {
        this.loading = true;
      }
    },
  },
});
