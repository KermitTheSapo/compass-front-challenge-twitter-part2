import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tweet } from './tweet';

export default {
  title: 'Components/Tweet',
  component: Tweet,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => <Tweet {...args} />;

export const base = Template.bind({});
base.args = {
    name: 'light',
};