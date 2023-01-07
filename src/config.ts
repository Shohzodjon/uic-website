const isUsWebsite = () => {
  return import.meta.env.VITE_APP_DOMAIN === "us";
};

export const Config: any = {
  BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  phoneNumber: isUsWebsite() ? "+998 71 200 70 07" : "+1 331 481-1908",
  domain: import.meta.env.VITE_APP_DOMAIN,
};

export const socialNetworks = [
  { name: "facebook", link: "https://www.facebook.com/uicgroup.org" },
  { name: "twitter", link: "https://www.twitter/uic.group/" },
  { name: "instagram", link: "https://www.instagram.com/uic.group/" },
  { name: "telegram", link: "https://t.me/uicgroup" },
];
