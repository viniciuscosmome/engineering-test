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
  const [textaresRows, setTextaresRows] = useState<number>(4);
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

  const changeRows = (text = ''): void => {
    const rows = text.split('\n').length;

    if (rows >= 15) setTextaresRows(14);
    else if (rows >= 4) setTextaresRows(rows);
    else setTextaresRows(4);
  };

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;
    changeRows(textarea.value);
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
        rows={textaresRows}
      />

      <div className={styles.message} data-display-error={message || ''}></div>
    </label>
  );
});
