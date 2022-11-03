import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Follow } from './follow';

export default {
  title: 'Components/Follow',
  component: Follow,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Follow>;

const Template: ComponentStory<typeof Follow> = (args) => <Follow {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  name: "light"
};

// export const base = Template.bind({});
// base.args = {
// };