import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideMenu } from './sideMenu';

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;


export const light = Template.bind({});
light.args = {
  name: "light",
};
export const dark = Template.bind({});
dark.args = {
  name: "dark",
};

