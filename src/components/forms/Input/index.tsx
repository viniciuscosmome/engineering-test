import { FormEvent, useState } from 'react';

import type { iInputProps, iValidatorsProps, iValidatorsResponse } from './input';
import styles from './input.module.scss';

const validators: iValidatorsProps = {
  text(input) {
    const { value, minLength = 0, maxLength, required } = input;
    const response = {} as iValidatorsResponse;
    const { length = 0 } = value;
    const isEmpty = !length;

    if (required && isEmpty) {
      response.message = 'This field cannot be empty.';
    } else if (!isEmpty && length < minLength) {
      response.message = `Out of length. [min: ${minLength}]`;
    } else if (maxLength && !isEmpty && length > maxLength) {
      response.message = `Out of length. [max: ${maxLength}]`;
    }

    return response;
  },
};

export function Input(props: iInputProps) {
  const {
    changeButtonState,
    label,
    type = 'text',
    name,
    value,
    placeholder,
    labelClass,
    titleClass,
    inputClass,
    required,
    minLength,
    maxLength,
  } = props;
  const [message, setMessage] = useState<string>();
  const [inputValue, setInputValue] = useState<string>(value as string);

  const validateInput = (input: HTMLInputElement, type: string): void => {
    setMessage('');

    if (!validators[type]) return;

    const { message } = validators[type](input);

    message && setMessage(message);
    changeButtonState && changeButtonState(!!message);
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    setInputValue(input.value);
    validateInput(input, type);
  };

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {label}
      </div>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.input} ${inputClass || ''}`}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
        value={inputValue}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
}
