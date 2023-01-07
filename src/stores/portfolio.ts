import { defineStore } from "pinia";
import axios from "@/plugins/axios";
export const usePortfolioStore = defineStore("portdolioId", {
  state: () => ({
    mainPortfolio: 0,
    mainCategories: [],
    portfolioHomePage: null,
  }),
  actions: {
    async fetchMainPortfolioImg(category: any) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/portfolio/`, {
            params: {
              category: category,
            },
          })
          .then(({ data }) => {
            this.mainPortfolio = data?.portfolio;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async fetchPortfolioCategories() {
      return new Promise((resolve, reject) => {
        axios
          .get("/portfolio-categories/")
          .then(({ data }) => {
            this.mainCategories = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    // portfolio home-page
    async fetchPortfolioHomePage(page: number) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/portfolio/?home_page=${page}`, {
            params: {
              page,
            },
          })
          .then(({ data }) => {
            this.portfolioHomePage = data.portfolio;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
