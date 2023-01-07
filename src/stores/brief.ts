import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useBriefStore = defineStore("briefId", {
  state: () => ({}),
  actions: {
    async addBrief(form: any) {
      return new Promise((resolve, reject) => {
        axios
          .post("/brief-short/", form)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
