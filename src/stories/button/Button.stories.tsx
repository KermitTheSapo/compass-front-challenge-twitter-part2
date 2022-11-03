import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Tweet'
};
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Tweet'
};
export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Tweet'
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Tweet',
};
