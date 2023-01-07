import { Story } from "@storybook/vue3";
import BasicSelect, { Props } from "./BasicSelect.vue";
import { ref } from "vue";

export default {
  title: "UI/Dropdown/BasicSelect",
  component: BasicSelect,
  argTypes: {
    select: {}, //funkciya nomi yoziladi emit qilingan
  },
};

const Template: Story<Props> = (args) => ({
  components: {
    BasicSelect,
  },

  setup() {
    return { args };
  },
  template: ` <basic-select @click="select"  v-bind="args" /> `,
});

export const Select = Template.bind({});
Select.args = {
  error: false,
  label: "select_label",
  title: "Vakansiya tanlang",
  type: "text",
  existArrow: true,
  customBg: "#2E2E30",
  customClass: "w-[429px]",
  data: {
    results: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
  },
};

// export const HalfSelect = Template.bind({});
// HalfSelect.args = {
//     title: "500$ dan",
// };
