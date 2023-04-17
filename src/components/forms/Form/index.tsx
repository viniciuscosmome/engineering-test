import type { iFormProps } from './form';
import styles from './form.module.scss';

export function Form(props: iFormProps) {
  const { title, children } = props;

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>
        {title}
      </h2>

      {children}
    </form>
  );
}
