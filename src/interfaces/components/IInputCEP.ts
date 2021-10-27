import { InputHTMLAttributes } from 'react';

export default interface IInputCEP
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  // eslint-disable-next-line no-unused-vars
  onChange(...event: any): void;
}
