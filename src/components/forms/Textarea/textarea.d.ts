import { TextareaHTMLAttributes, Dispatch, SetStateAction } from 'react';

export interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  labelClass?: string;
  titleClass?: string;
  textareaClass?: string;
  changeButtonState?: (disable?: boolean) => void;
}

export interface iValidatorsResponse {
  message: string;
}

export interface iValidatorsProps {
  [key: string]: (param: HTMLTextAreaElement) => iValidatorsResponse;
  textarea: (element: HTMLTextAreaElement) => iValidatorsResponse;
}
