import { FormEvent, useState } from 'react';

import type { iInputProps } from './input';
import styles from './input.module.scss';
import validators from '../../../helpers/validate';

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
  const [inputValue, setInputValue] = useState<string>((value || '') as string);
  const initialValue = value;

  const validateInput = (input: HTMLInputElement, type: string): void => {
    setMessage('');

    const { error, message } = validators.text(input, initialValue as string);

    error && setMessage(message);
    changeButtonState && changeButtonState(error);
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
