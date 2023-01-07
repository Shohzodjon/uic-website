import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useClientFeedback = defineStore("clientId", {
  actions: {
    async postFeedback(info: any) {
      return new Promise((resolve, reject) => {
        axios
          .post("/client-feedback/", info)
          .then((response) => {
            resolve(response);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
