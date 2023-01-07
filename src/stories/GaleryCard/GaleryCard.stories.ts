import { Story } from "@storybook/vue3";
import GaleryCard, { Props } from "./GaleryCard.vue";

export default {
  title: "Cards/Galery",
  component: GaleryCard,
};

const Template: Story<Props> = (args) => ({
  components: { GaleryCard },
  setup() {
    return { args };
  },
  template: '<galery-card v-bind="args" />',
});

export const Galery = Template.bind({});
Galery.args = {
  desc: "Jamoamiz a’zosi Xojarbu Hayitmetovaning tavallud ayyomi ",
  img: "https://picsum.photos/id/1/100",
  count: 20,
  link: "https://google.com ",
};
