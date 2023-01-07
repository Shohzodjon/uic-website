import { Story } from "@storybook/vue3";
import PartnerCard, { Props } from "./PartnerCard.vue";

export default {
  title: "Cards/Partner",
  component: PartnerCard,
};

const Template: Story<Props> = (args) => ({
  components: { PartnerCard },
  setup() {
    return { args };
  },
  template: '<partner-card v-bind="args" />',
});

export const Partner = Template.bind({});
Partner.args = {
  image: "https://picsum.photos/id/1/100",
  link: "https://google.com",
};
