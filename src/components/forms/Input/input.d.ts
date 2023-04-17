import { InputHTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClass?: string;
  titleClass?: string;
  inputClass?: string;
  changeButtonStatus?: (status?: boolean) => void;
}

export interface iValidatorsResponse {
  message: string;
}

export interface iValidatorsProps {
  [key: string]: (input: HTMLInputElement) => iValidatorsResponse;
  text: (input: HTMLInputElement) => iValidatorsResponse;
}
