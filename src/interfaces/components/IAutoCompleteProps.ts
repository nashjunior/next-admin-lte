import { IOptionProps } from './IOptionProps';

export type IAutoCompleteProps = {
  options: IOptionProps[];
  perPage?: number;
  listName: string;
  name: string;
  value?: IOptionProps;
  // eslint-disable-next-line no-unused-vars
  onChange: (option: IOptionProps) => void;
  error?: string;
};
