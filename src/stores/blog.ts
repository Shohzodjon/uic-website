import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useBlogStore = defineStore("blogId", {
  state: () => ({
    blog: [],
    mainBlogId: [],
    categoryData: [],
  }),
  actions: {
    async fetchBlog(category: any, search: any, page: any) {
      return new Promise((resolve, reject) => {
        const params = {
          category: category,
          search: search,
          page: page,
        };
        axios
          .get(`/blog/`, {
            params,
          })
          .then(({ data }) => {
            this.blog = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async fetchCategory() {
      return new Promise((resolve, reject) => {
        axios
          .get("/blog/")
          .then(({ data }) => {
            this.categoryData = data;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    async fetchEachBlog(id: any) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/blog/${id}`)
          .then(({ data }) => {
            this.mainBlogId = data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
});
