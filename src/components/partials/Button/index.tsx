import type { iButtonProps } from './button';
import styles from './button.module.scss';

export function Button(props: iButtonProps) {
  const {
    type = 'button',
    children,
    fit,
    uppercase,
    disabled = false,
    color = 'blue',
    className,
  } = props;
  const stylesArr = [];

  stylesArr.push(styles.button);

  fit && stylesArr.push(styles[`fit-${fit}`]);
  uppercase && stylesArr.push(styles.uppercase);
  color && stylesArr.push(`g-button-${color}`);
  className && stylesArr.push(className);

  const style = stylesArr.join(' ');

  return (
    <button type={type} className={style} disabled={disabled}>
      {children}
    </button>
  );
}
