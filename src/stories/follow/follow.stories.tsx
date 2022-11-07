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

export const light = Template.bind({});
light.args = {
    name: "light",
};
export const dark = Template.bind({});
dark.args = {
    name: "dark",
};

// export const base = Template.bind({});
// base.args = {
// };