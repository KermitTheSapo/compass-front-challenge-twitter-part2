import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const base = Template.bind({});
base.args = {
    name: "light",
};