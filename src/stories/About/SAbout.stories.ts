import { Story } from "@storybook/vue3";
import CAbout, { Props } from "./SAbout.vue";

export default {
  title: "About/CAbout",
  component: CAbout,
};
const Template: Story<Props> = (args) => ({
  components: { CAbout },
  setup() {
    return { args };
  },
  template: '<c-about v-bind="args"/>',
});
export const ComAbout = Template.bind({});
ComAbout.args = {
  image: "",
  link: "",
};
