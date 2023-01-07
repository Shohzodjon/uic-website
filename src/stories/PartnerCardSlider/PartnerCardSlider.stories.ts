import { Story } from "@storybook/vue3";
import PartnerCardSlider, { Props } from "./PartnerCardSlider.vue";

export default {
  title: "partners/slider",
  component: PartnerCardSlider,
};

const Template: Story<Props> = (args) => ({
  components: { PartnerCardSlider },
  setup() {
    return { args };
  },
  template: '<partnerCard-slider v-bind="args" />',
});

export const PartnerSlider = Template.bind({});
PartnerSlider.args = {
  // img: "https://picsum.photos/id/2/100",
  sliderCard: [{}],
};
