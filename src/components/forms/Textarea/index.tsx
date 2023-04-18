import { FormEvent, useState } from 'react';

import type { iTextareaProps, iValidatorsProps, iValidatorsResponse } from './textarea';
import styles from './textarea.module.scss';

const validators: iValidatorsProps = {
  textarea(textarea) {
    const { value, minLength = 0, maxLength, required } = textarea;
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

  const validateInput = (textarea: HTMLTextAreaElement, type: string): void => {
    setMessage('');

    if (!validators[type]) return;

    const { message } = validators[type](textarea);

    message && setMessage(message);
    changeButtonState && changeButtonState(!!message);
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
