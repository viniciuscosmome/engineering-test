import { FormEvent, useState, forwardRef } from 'react';

import styles from './textarea.module.scss';
import validators from '../../../helpers/validate';

export const Textarea = forwardRef<HTMLTextAreaElement, iTextareaProps>((props, textareaRef) => {
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
  const [textareaName, setTextareaName] = useState<string>(name || '');
  const [message, setMessage] = useState<string>();
  const initialValue = value;

  const validateInput = (textarea: HTMLTextAreaElement): void => {
    setMessage('');
    setTextareaName(name || '');

    const { error, message } = validators.text(textarea, initialValue as string);

    if (error !== 'none') {
      setMessage(message);
      setTextareaName('');
    }

    changeButtonState && changeButtonState(error);
  };

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;
    validateInput(textarea);
  };

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {label}
      </div>

      <textarea
        ref={textareaRef}
        name={textareaName}
        placeholder={placeholder}
        className={`${styles.textarea} ${textareaClass || ''}`}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        onChange={onChange}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
});
