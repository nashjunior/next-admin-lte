import React from 'react';
import { Error as ErrorComponent } from './styles';

const Error: React.FC = ({ children }) => {
  return <ErrorComponent>{children}</ErrorComponent>;
};

export default Error;
