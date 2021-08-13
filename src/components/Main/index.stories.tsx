import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Main',
  component: Main,
} as Meta;

// eslint-disable-next-line no-undef
export const Basic: Story = (args): JSX.Element => <Main {...args} />;

Basic.args;
