import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import InputCurrency from '.';
import IInputCurrencyProps from '../../../interfaces/components/IInputCurrencyProps';

const currencyConfig = {
  locale: 'pt-BR',
  currency: 'BRL',
};

export default {
  title: 'InputCurrency',
  component: InputCurrency,
  argTypes: {
    error: {
      name: 'Error',
      description: 'String containing the field error message',
    },
    disabled: {
      name: 'Disabled',
      description: 'Boolean value to check if input is disabled',
    },
    intlConfig: {
      name: 'Locale',
      description: 'Set the locale settings',
      defaultValue: currencyConfig,
    },
  },
} as Meta<IInputCurrencyProps>;

export const Basic: Story<IInputCurrencyProps> = (args) => (
  <InputCurrency {...args} />
);
