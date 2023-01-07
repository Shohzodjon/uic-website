import { Story } from "@storybook/vue3";
import BriefTab, { Props } from "./BriefTab.vue";

export default {
  title: "Brief/BriefTab",
  component: BriefTab,
};

const Template: Story<Props> = (args) => ({
  components: { BriefTab },
  setup() {
    return { args };
  },
  template: `
      <BriefTab v-bind="args"/>`,
});

export const briefTabMain = Template.bind({});
briefTabMain.args = {
  BriefTabValue: [
    { id: 1, name: "Shaxsiy ma’lumot " },
    { id: 2, name: "Maqsad va vazifalar " },
    { id: 3, name: "Sayt tuzilishi " },
    { id: 4, name: "Holatingiz " },
  ],
};
