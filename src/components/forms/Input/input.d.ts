import { InputHTMLAttributes } from 'react';

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClass?: string;
  titleClass?: string;
  inputClass?: string;
  changeButtonState?: (disable?: boolean) => void;
}
