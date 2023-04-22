type React = import('react');
type iChildren = string | React.ReactNode | Array<React.ReactNode>;

declare interface iFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children: iChildren;
}

declare interface iInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClass?: string;
  titleClass?: string;
  inputClass?: string;
  changeButtonState?: (errorStatus?: 'error' | 'warn' | 'none') => void;
}

declare interface iTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, Exclude<iInputProps, 'inputClass'> {
  textareaClass?: string;
}

declare interface iFormPostProps extends Partial<iPostState> {
  onCancel?: () => void;
}

declare interface iButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'red' | 'green' | 'white';
  fit?: 'right' | 'left' | 'center' | false;
  uppercase?: boolean;
  children: iChildren;
}

declare interface iConfirmActionProps {
  onCancel: () => void;
  onConfirm: () => void;
}

declare interface iHeaderProps {
  children: iChildren;
}

declare interface iModalProps {
  changeModalState: () => void;
  children: iChildren;
}

declare interface iIconProps extends React.SVGAttributes<SVGAElement> {
  size?: string | number;
}
