import { FormEvent, useState } from 'react';

import type { iTextareaProps, iValidatorsProps, iValidatorsResponse } from './textarea';
import styles from './textarea.module.scss';

const validators: iValidatorsProps = {
  textarea(textarea) {
    const { value, minLength = 0, required } = textarea;
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

export function Textarea(props: iTextareaProps) {
  const [message, setMessage] = useState<string>();
  const {
    label,
    name,
    placeholder,
    minLength,
    labelClass,
    titleClass,
    textareaClass,
    required,
    changeButtonState
  } = props;

  const validateInput = (textarea: HTMLTextAreaElement, type: string): void => {
    setMessage('');

    if (!validators[type]) return;

    const { message } = validators[type](textarea);

    message && setMessage(message);
    changeButtonState && changeButtonState(!!message);
  };

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;

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
        required={required}
        onChange={onChange}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
}
