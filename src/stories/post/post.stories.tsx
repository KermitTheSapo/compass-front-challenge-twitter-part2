import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Post } from './post';

export default {
  title: 'Components/Post',
  component: Post,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const base = Template.bind({});
base.args = {
  name: "light"
};