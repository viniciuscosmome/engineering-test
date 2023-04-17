import { FormEvent, useState } from 'react';

import type { iInputProps, iValidatorsProps, iValidatorsResponse } from './input';
import styles from './input.module.scss';

const validators: iValidatorsProps = {
  text(input) {
    const { value, minLength = 0, required } = input;
    const response = {} as iValidatorsResponse;
    const { length = 0 } = value;
    const isEmpty = !length;

    if (required && isEmpty) {
      response.message = 'This field cannot be empty.';
    } else if (!isEmpty && length < minLength) {
      response.message = `Out of length. [min: ${minLength}]`;
    }

    return response;
  },
};

export function Input(props: iInputProps) {
  const [message, setMessage] = useState<string>();
  const {
    changeButtonStatus,
    label,
    type = 'text',
    name,
    placeholder,
    labelClass,
    titleClass,
    inputClass,
    required,
    minLength,
  } = props;

  const validateInput = (input: HTMLInputElement, type: string): void => {
    setMessage('');

    if (!validators[type]) return;

    const { message } = validators[type](input);

    message && setMessage(message);
    changeButtonStatus && changeButtonStatus(!!message);
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

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
        required={required}
        onChange={onChange}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
}