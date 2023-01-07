import { Story } from "@storybook/vue3";
import HeaderComponent, { Props } from "./TheHeader.vue";

export default {
  title: "TheHeader",
  component: HeaderComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    TheHeader: HeaderComponent,
  },
  setup() {
    return { args };
  },
  template: `<the-header v-bind="args" />`,
});

export const mainHeader = Template.bind({});
mainHeader.args = {
  title: "",
  iconName: "logo_big_white",
  adaptiveIconName: "adaptive_logo_icon",
  customClassIcon: "text-white",
  customClassLang: "",
  customClassPage: "",
  customClassNav: "",
};
