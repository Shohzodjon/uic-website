import { Story } from "@storybook/vue3";
import FotoGalary, { Props } from "./FotoGalary.vue";

export default {
  title: "FotoGalary",
  component: FotoGalary,
};

const Template: Story<Props> = (args) => ({
  components: { FotoGalary },
  setup() {
    return { args };
  },
  template: '<foto-galary v-bind="args" />',
});

export const Galery = Template.bind({});
Galery.args = {
  desc: "Jamoamiz a’zosi Xojarbu Hayitmetovaning tavallud ayyomi ",
  image: "https://picsum.photos/id/1/100",
  count: 20,
  link: "https://google.com ",
};
