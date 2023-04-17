import { FormHTMLAttributes, ReactNode } from 'react';

export interface iFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children: string | ReactNode | Array<ReactNode>;
}
