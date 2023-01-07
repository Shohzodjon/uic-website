import { Story } from "@storybook/vue3";
import TitleSlider, { Props } from "./TitleSlider.vue";

export default {
  title: "TitleSlider",
  component: TitleSlider,
  argTypes: {},
};

const Template: Story<Props> = (args) => ({
  components: { TitleSlider },
  setup() {
    return { args };
  },

  template: '<title-slider  v-bind="args" /> ',
});

export const MediumTitleComponent = Template.bind({});
MediumTitleComponent.args = {
  title: "Logo va branding",
  subtitle:
    "Har qanday murakkablikdagi va yo‘nalishdagi loyihalarga biz tayyormiz",
};
