import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabbar } from './tabbar';

export default {
  title: 'Components/Tabbar',
  component: Tabbar,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Tabbar>;

const Template: ComponentStory<typeof Tabbar> = (args) => <Tabbar {...args} />;


export const light = Template.bind({});
light.args = {
  name: "light",
};
export const dark = Template.bind({});
dark.args = {
  name: "dark",
};
