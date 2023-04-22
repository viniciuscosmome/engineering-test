import { FormEvent, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState<string>();
  const [inputValue, setInputValue] = useState<string>((value || '') as string);
  const initialValue = value;

  const setNameAtt = (att: string) => {
    const input = inputRef.current as HTMLInputElement;
    input.name = att;
  };

  const validateInput = (input: HTMLInputElement): void => {
    setMessage('');
    setNameAtt(name || '');

    const { error, message } = validators.text(input, initialValue as string);

    if (error !== 'none') {
      setMessage(message);
      setNameAtt('');
    }

    changeButtonState && changeButtonState(error);
  };

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    setInputValue(input.value);
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
        name={''}
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
