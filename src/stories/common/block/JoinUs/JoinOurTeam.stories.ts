import { Story } from "@storybook/vue3";
import JoinOurTeam, { Props } from "./JoinOurTeam.vue";

export default {
  title: "Blocks/JoinOurTeam",
  component: JoinOurTeam,
};

const Template: Story<Props> = (args) => ({
  components: { JoinOurTeam },
  setup() {
    return { args };
  },
  template: '<join-our-team v-bind="args" />',
});

export const JoinUs = Template.bind({});
JoinUs.args = {
  title: "join_our_team_title",
  text: "join_our_team_text",
  link: "kun.uz",
};

export const JoinUsLists = Template.bind({});
JoinUsLists.args = {
  title: "join_our_team_title",
  text: "join_our_team_text",
};
