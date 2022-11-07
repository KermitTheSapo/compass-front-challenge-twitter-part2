import { ComponentStory, ComponentMeta } from '@storybook/react';
import { News } from './news';

export default {
  title: 'Components/News',
  component: News,
  argTypes: {
    user: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const light = Template.bind({});
light.args = {
  user: "light",
};
export const dark = Template.bind({});
dark.args = {
  user: "dark",
};
