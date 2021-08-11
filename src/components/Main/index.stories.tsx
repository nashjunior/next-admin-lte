import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

// eslint-disable-next-line no-undef
export const Basic = (): JSX.Element => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Descriptio',
      'Typscript, ReactJS, NextJS, Styled Components',
    )}
  />
);
