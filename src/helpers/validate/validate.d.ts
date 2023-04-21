export interface iValidatorsResponse {
  error: boolean;
  message: string;
}

type iTextInputTypes = HTMLInputElement | HTMLTextAreaElement;

export interface iValidatorsProps {
  [key: string]: (param: iTextInputTypes, initial?: string) => iValidatorsResponse;
  text: (element: iTextInputTypes, initial?: string) => iValidatorsResponse;
}
