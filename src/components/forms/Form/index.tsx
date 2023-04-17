import type { iFormProps } from './form';
import styles from './form.module.scss';

export function Form(props: iFormProps) {
  const { title, children, className } = props;
  const stylesArr = [];

  stylesArr.push(styles.form);
  className && stylesArr.push(className);

  const style = stylesArr.join(' ');

  return (
    <form className={style}>
      <h2 className={`${styles.title} g-title`}>
        {title}
      </h2>

      {children}
    </form>
  );
}
