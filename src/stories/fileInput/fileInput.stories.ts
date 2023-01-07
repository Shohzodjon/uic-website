import FileInput, { Props } from "./FileInput.vue";
import { Story } from "@storybook/vue3";

export default {
  title: "Input",
  component: FileInput,
};
const Template: Story<Props> = (args) => ({
  components: { FileInput },
  setup() {
    return { args };
  },
  template: '<FileInput v-bind="args" />',
});
export const File = Template.bind({});
File.args = {
  some: true,
};
