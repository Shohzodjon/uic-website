import { Story } from "@storybook/vue3";
import MediumTitle, { Props } from "./MediumTitle.vue";

export default {
  title: "BigTitle/MediumTitle/Medium Title Component",
  component: MediumTitle,
  argTypes: {},
};

const Template: Story<Props> = (args) => ({
  components: { MediumTitle },
  setup() {
    return { args };
  },

  template: '<medium-title  v-bind="args" /> ',
});

export const MediumTitleComponent = Template.bind({});
MediumTitleComponent.args = {
  title: "Logo va branding",
};

// export const MediumTitleComponent = Template.bind({});
// MediumTitleComponent.args = {
//     title: 'Blog',
//     customClassTitle: '!text-[120px] !leading-[144px]',
//     customClassText: '!text-[64px] !leading-[77px]'
// }
