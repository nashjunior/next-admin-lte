import React, { InputHTMLAttributes } from 'react';

import { Input, Error } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  fontSize?: number;
  register?: any;
}

const FormInput: React.FC<IProps> = ({
  disabled,
  error,
  register,
  fontSize,
  ...rest
}) => {
  return (
    <>
      <Input
        {...rest}
        fontSize={fontSize}
        className={`${disabled && 'disabled'}`}
        disabled={disabled}
        ref={register}
        error={error}
        onScroll={(e) => e.preventDefault()}
      />

      {error && <Error>{error}</Error>}
    </>
  );
};

FormInput.defaultProps = {
  error: undefined,
  fontSize: 14,
  register: undefined,
};
export default FormInput;
