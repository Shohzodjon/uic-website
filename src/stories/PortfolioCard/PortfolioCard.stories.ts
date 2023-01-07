import { Story } from "@storybook/vue3";
import PortfolioComponent, { Props } from "./PortfolioCard.vue";

export default {
  title: "Portfolio",
  component: PortfolioComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    Portfolio: PortfolioComponent,
  },
  setup() {
    return { args };
  },
  template: '<portfolio v-bind="args" />',
});

export const Smallcard = Template.bind({});
Smallcard.args = {
  cards: [
    {
      title: "Oliy Majlis Senati veb-sayti",
      projectType: "web",
      subtitle: "VEB Sayt",
      img: "@/assets/img/oliy.png",
      link: "#",
    },
  ],
};

export const BigCard = Template.bind({});
BigCard.args = {
  cards: [
    {
      title: "Oliy Majlis Senati veb-sayti",
      projectType: "web",
      subtitle: "VEB Sayt",
      img: "@/assets/img/oliy.png",
      link: "#",
    },
  ],
};
export const Mobile = Template.bind({});
Mobile.args = {
  cards: [
    {
      title: "Saylov 2021",
      projectType: "mobile",
      subtitle: "Mobil ilova",
      img: "oliy.png",
      link: "#",
    },
  ],
};
export const Brending = Template.bind({});
Brending.args = {
  cards: [
    {
      title: "Toshkent davlat agrar univer  ",
      projectType: "brending",
      subtitle: "Brending",
      img: "@/assets/img/oliy.png",
    },
  ],
};
