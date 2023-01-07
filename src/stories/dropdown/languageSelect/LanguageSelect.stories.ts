import { Story } from "@storybook/vue3";
import LanguageSelect, { Props } from "./LanguageSelect.vue";

export default {
  title: "UI/Dropdown/LanguageSelect",
  component: LanguageSelect,
  argTypes: {
    select: {}, //funkciya nomi yoziladi emit qilingan
  },
};

const Template: Story<Props> = (args) => ({
  components: {
    LanguageSelect,
  },

  setup() {
    return { args };
  },
  template: ` <language-select @click="select"  v-bind="args" /> `,
});

export const LangSelect = Template.bind({});
LangSelect.args = {
  title: "UZ",
  data: {
    results: ["UZ", "EN", "RU"],
  },
};
