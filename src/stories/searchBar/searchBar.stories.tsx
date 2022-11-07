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


export const light = Template.bind({});
light.args = {
  name: "light",
};
export const dark = Template.bind({});
dark.args = {
  name: "dark",
};
