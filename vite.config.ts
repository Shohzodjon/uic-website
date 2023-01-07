import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import generateSitemap from "vite-ssg-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), eslintPlugin()],
  ssgOptions: {
    onFinished() {
      generateSitemap({
        exclude: [
          "/",
          "/company",
          "/blog",
          "/blog/:slug",
          "/vacancy",
          "/vacancy/:slug",
          "/portfolio",
          "/portfolio/mobile",
          "/portfolio/websites",
          "/portfolio/branding",
          "/brief",
          "/brief/design",
          "/brief/websites",
          "/brief/crm-systems",
          "/brief/mobile-application",
          "/brief/media-production",
          "/brief/logo-branding",
          "/brief/game",
          "/brief/cybersecurity",
          "/brief/ai",
          "/gallery",
          "/gallery/:slug",
        ],
      });
    },
  },
  build: {
    minify: true,
    cssCodeSplit: true,
    manifest: true,
    target: "esnext",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
