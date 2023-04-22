export const setErrorIsEmpty = (): iValidatorsResponse => ({
  error: 'error',
  message: 'This field cannot be empty.',
});

export const setErrorLength = (detail: string): iValidatorsResponse => ({
  error: 'error',
  message: `Out of length. ${detail}`,
});

export const setError = (): iValidatorsResponse => ({
  error: 'warn',
  message: ''
});
