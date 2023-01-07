import { Story } from "@storybook/vue3";

import SButton, { Props } from "./SButton.vue";

export default {
  title: "Common/Buttons",
  component: SButton,
};

const Template: Story<Props> = (args) => ({
  components: { SButton },

  setup() {
    return { args };
  },
  template: ' <SButton class="k-button-primary w-full" v-bind="args" />',
});

export const Button = Template.bind({});
