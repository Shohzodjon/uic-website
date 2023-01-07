import FormSubmit, { Props } from "./FormSubmit.vue";
import { Story } from "@storybook/vue3";

export default {
  title: "Form",
  component: FormSubmit,
};
const Template: Story<Props> = (args) => ({
  components: { FormSubmit },
  setup() {
    return { args };
  },
  template: '<FormSubmit v-bind="args" />',
});
export const TemplateS = Template.bind({});
TemplateS.args = {
  col: true,
};
