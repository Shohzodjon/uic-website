import { Story } from "@storybook/vue3";
import BigTitle, { Props } from "./BigTitle.vue";

export default {
  title: "BigTitle/BigTitleComponent",
  component: BigTitle,
  argTypes: {},
};

const Template: Story<Props> = (args) => ({
  components: { BigTitle },
  setup() {
    return { args };
  },

  template: '<big-title  v-bind="args" /> ',
});

export const BigTitleComponent = Template.bind({});
BigTitleComponent.args = {
  title: "Vakansiya",
};

// export const MediumTitleComponent = Template.bind({});
// MediumTitleComponent.args = {
//     title: 'Blog',
//     customClassTitle: '!text-[120px] !leading-[144px]',
//     customClassText: '!text-[64px] !leading-[77px]'
// }
