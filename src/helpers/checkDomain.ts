import { Config } from "@/config";

const isUsWebsite = () => {
  return Config.domain === "us";
};

export default isUsWebsite;
