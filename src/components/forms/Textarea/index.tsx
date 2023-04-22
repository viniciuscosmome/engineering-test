import { FormEvent, useRef, useState } from 'react';

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
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [message, setMessage] = useState<string>();
  const [textareaValue, setTextareaValue] = useState<string>(value as string);
  const initialValue = value;

  const setNameAtt = (att: string) => {
    const textarea = textareaRef.current as HTMLTextAreaElement;
    textarea.name = att;
  };

  const validateInput = (textarea: HTMLTextAreaElement): void => {
    setMessage('');
    setNameAtt(name || '');

    const { error, message } = validators.text(textarea, initialValue as string);

    if (error !== 'none') {
      setMessage(message);
      setNameAtt('');
    }

    changeButtonState && changeButtonState(error);
  };

  const onChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.target as HTMLTextAreaElement;

    setTextareaValue(textarea.value);
    validateInput(textarea);
  };

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass}`}>
      <div className={`${styles.title} ${titleClass || ''}`}>
        {label}
      </div>

      <textarea
        ref={textareaRef}
        name={''}
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
