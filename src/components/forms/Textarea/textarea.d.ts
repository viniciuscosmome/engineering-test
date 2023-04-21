import { TextareaHTMLAttributes } from 'react';

export interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  labelClass?: string;
  titleClass?: string;
  textareaClass?: string;
  changeButtonState?: (disable?: boolean) => void;
}
