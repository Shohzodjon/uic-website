import { Story } from "@storybook/vue3";
import VacancySlugComponent, { Props } from "./VacancySlug.vue";

export default {
  title: "VacancySlug",
  component: VacancySlugComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    VacancySlug: VacancySlugComponent,
  },
  setup() {
    return { args };
  },
  template: '<vacancy-slug v-bind="args" />',
});

export const Backend = Template.bind({});
Backend.args = {
  title: "Backend — Python, Django dasturchi",
  workDay: "1999.14.02",
  workTime: "18:00",
};

export const Frontend = Template.bind({});
Frontend.args = {
  title: "Frontend — Javascript, Vue3 dasturchi",
  workDay: "2020.14.02",
  workTime: "18:00",
};
