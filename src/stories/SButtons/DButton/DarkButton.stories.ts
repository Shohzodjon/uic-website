import { Story } from "@storybook/vue3";
import DarkButton, { Props } from "./DarkButton.vue";

export default {
  title: "Buttons/Dbutton",
  component: DarkButton,
};

const Template: Story<Props> = (args) => ({
  components: { DarkButton },
  setup() {
    return { args };
  },
  template: '<dark-button v-bind="args" />',
});

export const Darkbutton = Template.bind({});
Darkbutton.args = {
  title: "buttons.btn2",
  icon: "phone_icon",
  link: "+998977357789",
  downloadLink: false,
  btnIcon: "phone_icon",
};
