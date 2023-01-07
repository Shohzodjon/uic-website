import { Story } from "@storybook/vue3";
import PartnerCards, { Props } from "./PartnerCards.vue";

export default {
  title: "Partners",
  component: PartnerCards,
};

const Template: Story<Props> = (args) => ({
  components: { PartnerCards },
  setup() {
    return { args };
  },
  template: '<partner-cards v-bind="args" />',
});

export const Partner = Template.bind({});
Partner.args = {
  img: "https://picsum.photos/id/2/100",
  cardType: null,
};
