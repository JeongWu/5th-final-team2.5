import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InputBox, { InputBoxProps } from './InputBox';

export default {
  title: 'InputBox',
  component: InputBox,
} as Meta;

const Template: Story<InputBoxProps> = (args) => <InputBox {...args} />;
export const Default = Template.bind({});

const TemplateMultiLine: Story<InputBoxProps> = (args) => <InputBox {...args} />;
export const MultiLine = TemplateMultiLine.bind({});
MultiLine.args = {
  multiline: true,
  placeholder: '동아리 소개 (200자 이상)',
};
