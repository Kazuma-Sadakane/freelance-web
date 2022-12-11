import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonProps} from './Button';

export default {
  title: 'button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Base = Template.bind({});

Base.args = {className: 'w-auto h-auto bg-black text-white'} as ButtonProps;
