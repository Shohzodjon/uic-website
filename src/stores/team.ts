import { defineStore } from "pinia";
import axios from "@/plugins/axios";
export const useTeamStore = defineStore("teamId", {
  state: () => ({
    mainTeam: 0,
  }),
  actions: {
    async fetchTeam() {
      return new Promise((resolve, reject) => {
        axios
          .get("/team")
          .then(({ data }) => {
            this.mainTeam = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
