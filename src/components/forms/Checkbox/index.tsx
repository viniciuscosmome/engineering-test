import { forwardRef } from 'react';

import styles from './checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, iInputProps>((props, checkboxRef) => {
  const {
    label,
    name,
    labelClass,
  } = props;

  return (
    <label htmlFor={name} className={`${styles.label} ${labelClass || ''}`}>
      <input
        ref={checkboxRef}
        type={'checkbox'}
        id={name}
        name={name}
        className={styles.checkbox}
      />

      {label}
    </label>
  );
});
