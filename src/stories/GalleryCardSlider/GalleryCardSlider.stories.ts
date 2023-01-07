import { Story } from "@storybook/vue3";
import GalleryCardSlider, { Props } from "./GalleryCardSlider.vue";

export default {
  title: "GallerySlide",
  component: GalleryCardSlider,
};

const Template: Story<Props> = (args) => ({
  components: {
    GallerySlide: GalleryCardSlider,
  },
  setup() {
    return { args };
  },
  template: '<gallery-slide v-bind="args" />',
});

export const PhotoGallerySlider = Template.bind({});
PhotoGallerySlider.args = {};
