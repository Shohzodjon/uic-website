import { Story } from "@storybook/vue3";
import OurTeam, { Props } from "./OurTeam.vue";

export default {
  title: "Cards/OurTeam",
  component: OurTeam,
};

const Template: Story<Props> = (args) => ({
  components: { OurTeam },
  setup() {
    return { args };
  },
  template: '<our-team v-bind="args" />',
});

export const TeamCard = Template.bind({});
TeamCard.args = {
  img: "/uic-images/image/team-members.png",
  alt: "team-members",
  memberName: "Jasurbek Urolboev",
  memberPosition: "Design team TL",
};
