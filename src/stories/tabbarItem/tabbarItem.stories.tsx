import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TabbarItem } from './tabbarItem';

export default {
  title: 'Components/TabbarItem',
  component: TabbarItem,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof TabbarItem>;

const Template: ComponentStory<typeof TabbarItem> = (args) => <TabbarItem {...args} />;

export const base = Template.bind({});
base.args = {
    name: "light",
};
