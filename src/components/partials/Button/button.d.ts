import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'red' | 'green' | 'white' | 'white';
  fit?: 'right' | 'left' | 'center' | false;
  uppercase?: boolean;
  children: string | ReactNode | Array<ReactNode>;
}
