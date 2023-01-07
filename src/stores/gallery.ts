import { defineStore } from "pinia";
import axios from "@/plugins/axios";

export const useGalleryStore = defineStore<string, { [key: string]: any }>(
  "galleryId",
  {
    state: () => ({
      mainGallery: 0,
      mainPhotogallery: 0,
      singlePhotoGallery: null,
    }),
    actions: {
      async fetchMainTeamImages() {
        return new Promise((resolve, reject) => {
          axios
            .get("/about-us-gallery")
            .then(({ data }) => {
              this.mainGallery = data;
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },

      async fetchPhotogallery() {
        return new Promise((resolve, reject) => {
          axios
            .get("/gallery")
            .then(({ data }) => {
              this.mainPhotogallery = data;
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
      async fetchPhotogallerySingle(slug: any) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/gallery/${slug}`)
            .then(({ data }) => {
              this.singlePhotoGallery = data;
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        });
      },
    },
  }
);
