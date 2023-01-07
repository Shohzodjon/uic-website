import { Story } from "@storybook/vue3";
import VacancyComponent, { Props } from "./SVacancy.vue";

export default {
  title: "Vacancy",
  component: VacancyComponent,
};

const Template: Story<Props> = (args) => ({
  components: {
    Vacancy: VacancyComponent,
  },
  setup() {
    return { args };
  },
  template: '<vacancy v-bind="args" />',
});

export const Backend = Template.bind({});
Backend.args = {
  title: "Backend — Python, Django dasturchi",
  workDayFrom: "Dushanba",
  workDayTo: "Shanba",
  workTimeFrom: "09:00",
  workTimeTo: "18:00",
  cardType: "back",
  amountFrom: 1000,
  amountTo: 1500,
};

export const Frontend = Template.bind({});
Frontend.args = {
  title: "Frontend — Javascript, Vue3 dasturchi",
  workDayFrom: "Dushanba",
  workDayTo: "Shanba",
  workTimeFrom: "09:00",
  workTimeTo: "18:00",
  cardType: "front",
  amountFrom: 1000,
  amountTo: 1500,
};
