import { Story } from "@storybook/vue3";
import UIcons, { Props } from "./UIcons.vue";

export default {
  title: "UIcons",
  component: UIcons,
};

const Template: Story<Props> = (args) => ({
  components: { UIcons },

  setup() {
    return { args };
  },
  template: '<UIcons v-bind="args" />',
});

export const Icon = Template.bind({});
Icon.args = {
  name: "home",
};
