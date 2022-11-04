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

export const base = Template.bind({});
base.args = {
    name: "light",
};
