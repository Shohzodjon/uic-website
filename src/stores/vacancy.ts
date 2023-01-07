import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useVacancyStore = defineStore("vacancyId", {
  state: () => ({
    mainVacancy: [],
    mainVacancyId: [],
  }),
  actions: {
    fetchMainVacancy: async function (size: any) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/vacancy/?size=${size}`)
          .then(({ data }) => {
            const newData = data.results;
            newData.forEach((vacancy: any) => {
              vacancy.from_clock = vacancy.from_clock.slice(0, 5);
              vacancy.to_clock = vacancy.to_clock.slice(0, 5);
            });
            this.mainVacancy = newData;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async fetchMainVacancyId(id: any) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/vacancy/${id}`)
          .then(({ data }) => {
            this.mainVacancyId = data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async addVacancy(form: any) {
      return new Promise((resolve, reject) => {
        axios
          .post("/vacancy-feedback/", form)
          .then((response: any) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
});
