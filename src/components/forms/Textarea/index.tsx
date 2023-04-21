import { FormEvent, useState } from 'react';

import type { iTextareaProps } from './textarea';
import styles from './textarea.module.scss';
import validators from '../../../helpers/validate';

export function Textarea(props: iTextareaProps) {
  const {
    label,
    name,
    value,
    placeholder,
    minLength,
    maxLength,
    labelClass,
    titleClass,
    textareaClass,
    required,
    changeButtonState
  } = props;
  const [message, setMessage] = useState<string>();
  const [textareaValue, setTextareaValue] = useState<string>(value as string);
  const initialValue = value;

  const validateInput = (textarea: HTMLTextAreaElement, type: string): void => {
    setMessage('');

    const { error, message } = validators.text(textarea, initialValue as string);

    error && setMessage(message);
    changeButtonState && changeButtonState(error);
  };

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;

    setTextareaValue(textarea.value);
    validateInput(textarea, 'textarea');
  };

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {label}
      </div>

      <textarea
        name={name}
        placeholder={placeholder}
        className={`${styles.textarea} ${textareaClass || ''}`}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
        value={textareaValue}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
}
