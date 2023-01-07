import { Story } from "@storybook/vue3";
import BasicInput, { Props } from "./BasicInput.vue";
import { ref } from "vue";

export default {
  title: "Ui/Basic Input",
  component: BasicInput,
};

const Template: Story<Props> = (args) => ({
  components: { BasicInput },
  setup() {
    const value = ref();
    return { args, value };
  },
  template: `
    <div>
    <basic-input v-model="value" v-bind="args" />
    </div>
    `,
});

export const MainInput = Template.bind({});
MainInput.args = {
  label: "form.nameplaceholder",
  type: "text",
  placeholder: "input_placeholder",
  maxLength: 3,
  minLength: 2,
  required: true,
  backgroundColor: "#141415",
  inputInnerClass: "",
  warning: false,
  minus: false,
  searchIcon: false,
  inputClass: "",
};
