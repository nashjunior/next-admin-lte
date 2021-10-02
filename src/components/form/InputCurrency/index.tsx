import React from 'react';
import IInputCurrencyProps from '../../../interfaces/components/IInputCurrencyProps';
import Error from '../InputError';
import * as S from './styles';

const InputCurrency: React.FC<IInputCurrencyProps> = ({
  error,
  disabled,
  ...restProps
}) => {
  return (
    <>
      <S.Input {...restProps} disabled={disabled} error={error} />
      {error && <Error>{error}</Error>}
    </>
  );
};

InputCurrency.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  intlConfig: {
    locale: 'pt-BR',
    currency: 'BRL',
  },
};

export default InputCurrency;
