export default [
  {
    path: "/",
    name: "PHome",
    meta: { title: "Home", layout: "mainPage" },
    component: () => import("@/pages/Index/PIndex.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Error", layout: "empty" },
    component: () => import("@/layouts/LEmpty.vue"),
  },
  {
    path: "/about",
    name: "PCompany",
    meta: { title: "Company", layout: "default" },
    // component: () => import("@/pages/company-page/PCompany.vue"),
    component: () => import("@/pages/about-page/about-index.vue"),
  },
  {
    path: "/blog",
    name: "PBlog",
    meta: { title: "blog", layout: "default" },
    component: () => import("@/pages/blog-page/blog-index.vue"),
  },
  {
    path: "/blog/:slug",
    name: "PBlogId",
    meta: { layout: "default" },
    component: () => import("@/pages/blog-page/blog-slug.vue"),
  },
  {
    path: "/vacancy",
    name: "PVacancy",
    meta: { title: "Vacancy", layout: "default" },
    component: () => import("@/pages/vacancy/PVacancy.vue"),
  },
  {
    path: "/vacancy/:slug",
    name: "PVacancyId",
    meta: { layout: "default" },
    component: () => import("@/pages/vacancy/slug/PCSVacancy.vue"),
  },
  {
    path: "/portfolio",
    name: "PPortfolio",
    meta: { title: "Portfolio", layout: "default" },
    component: () => import("@/pages/portfolio/portfolio-index.vue"),
  },
  {
    path: "/portfolio/mobile",
    name: "PPortfolio/mobile",
    meta: { title: "Portfolio", layout: "default" },
    component: () => import("@/pages/portfolio/portfolio-index.vue"),
  },
  {
    path: "/portfolio/websites",
    name: "PPortfolio/websites",
    meta: { title: "Portfolio", layout: "default" },
    component: () => import("@/pages/portfolio/portfolio-index.vue"),
  },
  {
    path: "/portfolio/branding",
    name: "PPortfolio/branding",
    meta: { title: "Portfolio", layout: "default" },
    component: () => import("@/pages/portfolio/portfolio-index.vue"),
  },
  {
    path: "/brief",
    name: "PBrief",
    meta: { title: "Brief", layout: "default" },
    component: () => import("@/pages/brief/PBIndex.vue"),
  },
  {
    path: "/brief/design",
    name: "design",
    meta: { title: "UI/UX DESIGN", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/websites",
    name: "websites",
    meta: { title: "WEBSITE", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/crm-systems",
    name: "crm-systems",
    meta: { title: "CRM", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/mobile-application",
    name: "mobile-application",
    meta: { title: "MOBILE APP", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/media-production",
    name: "media-production",
    meta: { title: "MEDIA PRODUCTION", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/logo-branding",
    name: "logo-branding",
    meta: { title: "LOGOBRANDING", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/game",
    name: "Game Development",
    meta: { title: "Game Development", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/cybersecurity",
    name: "Cybersecurity",
    meta: { title: "Cybersecurity", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/brief/ai",
    name: "Artificial Intelligence",
    meta: { title: "Artificial Intelligence", layout: "brief" },
    component: () => import("@/pages/brief/components/PBCHero.vue"),
  },
  {
    path: "/gallery",
    component: () => import("@/pages/photo-gallery/gallery-slug.vue"),
  },
  {
    path: "/gallery/:slug",
    meta: { layout: "default" },
    component: () => import("@/pages/photo-gallery/gallery-slug.vue"),
  },

  {
    path: "/portfolio/express24",
    meta: { title: "Express 24" },
    component: () => import("@/pages/portfolio/express24/uic-index.vue"),
  },

  {
    path: "/portfolio/avloniy",
    meta: { title: "Avloniy", layout: "portfolio" },
    component: () => import("@/pages/portfolio/avloniy/uic-index.vue"),
  },
  {
    path: "/portfolio/tsul",
    meta: { title: "TSUL", layout: "portfolio" },
    component: () => import("@/pages/portfolio/tsul/uic-index.vue"),
  },
  {
    path: "/portfolio/ricomel",
    meta: { title: "Ricomel", layout: "portfolio" },
    component: () => import("@/pages/portfolio/ricomel/uic-index.vue"),
  },
  {
    path: "/portfolio",
    meta: { title: "Portfolio", layout: "default" },
    component: () => import("@/pages/portfolio/portfolio-index.vue"),
  },
  {
    path: "/portfolio/munir",
    meta: { title: "Munir", layout: "portfolio" },
    component: () => import("@/pages/portfolio/munir/uic-index.vue"),
  },
];
