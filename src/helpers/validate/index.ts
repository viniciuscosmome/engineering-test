import type { iValidatorsProps, iValidatorsResponse } from './validate';
import { setError, setErrorIsEmpty, setErrorLength } from './validate.config';

const validators: iValidatorsProps = {
  text(input, initialValue) {
    const { value, minLength = 0, maxLength, required } = input;
    const { length = 0 } = value;
    const isEmpty = !length;
    let response = { error: false, message: '' };

    if (required && isEmpty) {
      response = setErrorIsEmpty();
    } else if (!isEmpty && length < minLength) {
      response = setErrorLength(`[min: ${minLength}]`);
    } else if (maxLength && !isEmpty && length > maxLength) {
      response = setErrorLength(`[max: ${maxLength}]`);
    } else if (initialValue && initialValue === value) {
      response = setError();
    }

    return response;
  },
};

export type { iValidatorsProps, iValidatorsResponse };
export default validators;
