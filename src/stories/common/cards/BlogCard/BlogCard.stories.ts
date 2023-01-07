import { Story } from "@storybook/vue3";
import BlogCardComponent, { Props } from "./BlogCard.vue";

export default {
  title: "BlogCard",
  component: BlogCardComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    BlogCard: BlogCardComponent,
  },
  setup() {
    return { args };
  },
  template: '<blog-card v-bind="args" />',
});

export const BlogCard = Template.bind({});
BlogCard.args = {
  title: "UIC jamoasi “BAA” ga xizmat safarini amalga oshirdi",
  text: "Project Managers - yangicha yondashuv va zamonaviy sifat kafolati. Ochiq faoliyat maydonchalari, dolzarb loyihalar, ilgʻor jamoa...",
  img: "",
  date: "2021-02-14",
  views: 884,
  type: "Lifestyle",
  slug: "https://uic.group/uz",
};
