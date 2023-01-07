import { Story } from "@storybook/vue3";
import AboutCard, { Props } from "./SAboutCard.vue";

export default {
  title: "About/AboutCard",
  component: AboutCard,
};
const Template: Story<Props> = (args) => ({
  components: { AboutCard },
  setup() {
    return { args };
  },
  template: '<about-card v-bind="args" />',
});

export const About = Template.bind({});
About.args = {
  image: "https://picsum.photos/id/1/100",
  icon: "",
};
