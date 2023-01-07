import { Story } from "@storybook/vue3";
import ClientsOpinionCard, { Props } from "./ClientsOpinionCard.vue";

export default {
  title: "Cards/ClientsOpinionCard",
  component: ClientsOpinionCard,
};

const Template: Story<Props> = (args) => ({
  components: { ClientsOpinionCard },
  setup() {
    return { args };
  },
  template: '<clients-opinion-card v-bind="args" />',
});

export const ClientsOpinion = Template.bind({});
ClientsOpinion.args = {
  img: "/uic-images/image/clients-opinion.png",
  alt: "clients-opinion",
  clientName: "Aziz Halikov",
  clientPosition: "AZ Capital loyihasi asoschisi",
  clientComment:
    "Ish o'z vaqtida juda kam uchraydigan va juda muhim bo'lgan ijodkorlik, texnik jihatdan ajoyib simbioz bilan amalga oshirildi.",
  service: "VEB Sayt",
  clientSite: "super1000.com",
  clientMoreComment:
    "Взаимодействие с командой UIC Group у нас вышло своеобразным. Была не одна личная встреча, мы долго искали взаимопонимание.Вначале нас не слышали и делали уклон в природные мотивы при отрисовке дизайна, при одной договорённости делали другую вещь по своему виденью. Нас это не устраивало, и мы не раз объясняли суть нашего салона, его концепцию. Приходилось встречаться с командой проекта и совместно приходить к решению в режиме оффлайн.",
  clientSiteLink: "https://super1000.uz/",
};
