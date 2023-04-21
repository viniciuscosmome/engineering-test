import type { iValidatorsResponse } from './validate';

export const setErrorIsEmpty = (): iValidatorsResponse => ({
  error: true,
  message: 'This field cannot be empty.',
});

export const setErrorLength = (detail: string): iValidatorsResponse => ({
  error: true,
  message: `Out of length. ${detail}`,
});

export const setError = (): iValidatorsResponse => ({
  error: true,
  message: ''
});
