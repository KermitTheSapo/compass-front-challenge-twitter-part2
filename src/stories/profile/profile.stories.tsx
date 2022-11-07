import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from './profile';

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;


export const light = Template.bind({});
light.args = {
  name: "light",
};
export const dark = Template.bind({});
dark.args = {
  name: "dark",
};
