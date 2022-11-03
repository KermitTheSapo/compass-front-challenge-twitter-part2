import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBar } from './searchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const base = Template.bind({});
base.args = {
    name: 'light',
};
