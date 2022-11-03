import { ComponentStory, ComponentMeta } from '@storybook/react';
import { News } from './news';

export default {
  title: 'Components/News',
  component: News,
  argTypes: {
    name: {control: {type: 'select', options: ["light", "dark"]}},
  },
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: "light"
};
