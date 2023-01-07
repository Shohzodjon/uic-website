import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => ({
    meta: [
      {
        content: "",
        tagName: "",
      },
    ],
  }),
  actions: {
    setMetaInfo(data: any) {
      this.meta = data;
    },
  },
});
