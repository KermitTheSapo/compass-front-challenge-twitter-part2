import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from './menu-item';

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  argTypes: {
    name: {control: {type: 'select', options: ["house-inverted", "house-default", "house-selected"]}},
  },
  color: {
    control: {control: {type: 'select', options: ["blue", "dark", "light"]}}
  },
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const base = Template.bind({});
base.args = {
    name: 'house-inverted',
    color: "light",
};
