import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface InputButtonProps {
  errors?: string;
  onClick: () => void;
}

export interface InputProps {
  errors?: string;
  id: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  touched?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: number | string;
}
