import { Story, Meta } from '@storybook/web-components';
import { MyBasic } from './basic';

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
} as Meta;


const Template: Story = (args) => {
  return (<my-basic {...args}> </my-basic>)
};


export const Primary = Template.bind({});
Primary.args = {
  first: 'Julia',
  last: 'Roberts'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
