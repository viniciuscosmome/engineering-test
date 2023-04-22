declare interface iValidatorsResponse {
  error: 'error' | 'warn' | 'none';
  message: string;
}

type iTextInputTypes = HTMLInputElement | HTMLTextAreaElement;

declare interface iValidatorsProps {
  [key: string]: (param: iTextInputTypes, initial?: string) => iValidatorsResponse;
  text: (element: iTextInputTypes, initial?: string) => iValidatorsResponse;
}
