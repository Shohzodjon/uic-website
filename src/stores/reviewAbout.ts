import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useReviewAbout = defineStore("aboutId", {
  state: () => ({
    mainReviewAbout: [],
    mainReviewAboutId: [],
  }),
  actions: {
    async fetchMainRevieweAbout() {
      return new Promise((resolve, reject) => {
        axios
          .get("/review-about-us")
          .then(({ data }) => {
            this.mainReviewAbout = data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
