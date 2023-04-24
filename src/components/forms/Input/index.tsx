import { FormEvent, useState, forwardRef } from 'react';

import styles from './input.module.scss';
import validators from '../../../helpers/validate';

export const Input = forwardRef<HTMLInputElement, iInputProps>((props, inputRef) => {
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
  const [inputName, setInputName] = useState<string>((name || '') as string);
  const initialValue = value;

  const validateInput = (input: HTMLInputElement): void => {
    setMessage('');
    setInputName(name || '');

    const { error, message } = validators.text(input, initialValue as string);

    if (error !== 'none') {
      setMessage(message);
      setInputName('');
    }

    changeButtonState && changeButtonState(error);
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    validateInput(input);
  };

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {label}
      </div>

      <input
        ref={inputRef}
        type={type}
        name={inputName}
        placeholder={placeholder}
        className={`${styles.input} ${inputClass || ''}`}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
});
