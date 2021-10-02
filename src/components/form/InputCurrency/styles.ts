import styled, { css } from 'styled-components';
import InputCurrency from 'react-currency-input-field';

// eslint-disable-next-line no-unused-vars
type IInputProps = {
  error?: string;
};

// eslint-disable-next-line no-undef
export const Input = styled(InputCurrency)<IInputProps>`
  height: 38px;
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #333;

  font-size: 14px;
  font-weight: 400;
  &::placeholder {
    color: #999;
  }

  &:focus-within {
    border-color: #999;
  }

  &:hover {
    border-color: #aaa;
  }

  &.disabled {
    background: #e3e3e3;
    color: #333;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #ff3030;
      &:focus-within {
        border-color: #ff3030;
      }

      &:hover {
        border-color: #ff3030;
      }
      &::placeholder {
        color: #ff3030;
      }
    `}
`;
