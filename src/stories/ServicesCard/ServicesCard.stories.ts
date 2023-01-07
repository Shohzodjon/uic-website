import { Story } from "@storybook/vue3";
import ServicesComponent, { Props } from "./ServicesCard.vue";

export default {
  title: "Service",
  component: ServicesComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    Service: ServicesComponent,
  },
  setup() {
    return { args };
  },
  template: '<service v-bind="args" />',
});

export const Design = Template.bind({});
Design.args = {
  serviceCard: [
    {
      title: "UI&UX dizayn",
      subtitle:
        "Loyiha MindMapʼini ishlab chiqish va ushbu arxitektura asosida optimal yechimga ega dizaynlarni chizish",
    },
  ],
};

export const Web = Template.bind({});
Web.args = {
  serviceCard: [
    {
      title: "Veb-saytlar",
      subtitle:
        "Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz",
    },
  ],
};

export const AllTypes = Template.bind({});
AllTypes.args = {};
