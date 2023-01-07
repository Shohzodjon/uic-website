import { Story } from "@storybook/vue3";
import WhiteButton, { Props } from "./WhiteButton.vue";

export default {
  title: "Buttons/Wbutton",
  component: WhiteButton,
};

const Template: Story<Props> = (args) => ({
  components: { WhiteButton },
  setup() {
    return { args };
  },
  template: '<white-button v-bind="args" />',
});

export const Whitebutton = Template.bind({});
Whitebutton.args = {
  title: "fill_brief",
  icon: "arrow_right",
  customClass: "",
  customIconClass: "",
};
