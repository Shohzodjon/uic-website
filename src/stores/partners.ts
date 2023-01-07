import { defineStore } from "pinia";
import axios from "@/plugins/axios";
export const usePartnersStore = defineStore("partnerId", {
  state: () => ({
    mainPartners: 0,
  }),
  actions: {
    async fetchMainPartners() {
      return new Promise((resolve, reject) => {
        axios
          .get("/partners")
          .then(({ data }) => {
            this.mainPartners = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
