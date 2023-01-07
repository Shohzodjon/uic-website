import { defineStore } from "pinia";
import axios from "@/plugins/axios";
export const useBrandbookStore = defineStore("brandbookId", {
  state: () => ({
    brandbook: null,
  }),
  actions: {
    async fetchBrandbook() {
      return new Promise((resolve, reject) => {
        axios
          .get("/brandbook")
          .then(({ data }) => {
            this.brandbook = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
