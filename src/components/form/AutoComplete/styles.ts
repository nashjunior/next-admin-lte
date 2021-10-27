/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled, { css, keyframes } from 'styled-components';

type IProps = {
  error?: string;
};

type IOptionProps = {
  value?: string | number;
};

type ISelectWrapperProps = {
  isActive?: boolean;
};

export const Input = styled.input<IProps>`
  background-color: white;
  width: 100%;
  height: 4rem;

  padding-left: 4px;
  border: 1px solid rgb(207, 225, 227);
  border-radius: 4px;

  color: rgb(113, 128, 150);
  font-size: 1.5rem;
  line-height: 1.5;

  &:focus {
    outline: none;
    ${(props) =>
      !props.error &&
      css`
        border: 2px solid rgb(38, 132, 255);
      `}
  }

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `}
  transition: border 0.15s ease;
`;

const OpenSelectWrapperKeyFrame = keyframes`
  from {
        transform: rotateX(-90deg)
    }
    
    to {
        transform: rotateX(0deg) 
    }
`;

export const SelectWrapper = styled.div<ISelectWrapperProps>`
  z-index: 12;
  display: none;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1.5px 0px rgba(113, 128, 150, 0.3),
    -1.5px 0px rgba(113, 128, 150, 0.3);

  font-size: 14px;
  font-weight: 400;
  color: rgb(162, 165, 166);

  ${(props) =>
    props.isActive &&
    css`
      display: block;
      animation: ${OpenSelectWrapperKeyFrame} 1.5s;
    `}
`;

export const Option = styled.div<IOptionProps>`
  width: 100%;
  height: 4rem;
  padding-top: 12px;
  border-radius: 4px;
  border: 0 1px solid;

  &:hover {
    background: rgb(207, 225, 227);
  }

  &:last-child {
    padding-bottom: 0;
  }
  text-align: center;
`;

export const Pagination = styled.div`
  border-top: 1px solid rgb(207, 225, 227);
  height: 4rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -2px;
  font-size: 18px;
`;

export const IconPagination = styled.div`
  width: 10%;
  text-align: center;
  height: 100%;
  border: 0;

  outline: none;
  &:hover {
    background: rgb(207, 225, 227);

    img,
    svg {
      color: rgb(162, 165, 166);
    }
  }
`;
