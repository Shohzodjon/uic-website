import { Story } from "@storybook/vue3";
import AboutItemTabComponent, { Props } from "./AboutItemTab.vue";

export default {
  title: "AboutItemTab",
  component: AboutItemTabComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    AboutItemTab: AboutItemTabComponent,
  },
  setup() {
    return { args };
  },
  template: '<AboutItemTab v-bind="args" />',
});

export const tabs = Template.bind({});
