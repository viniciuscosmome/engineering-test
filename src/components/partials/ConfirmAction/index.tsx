import styles from './confirmaction.module.scss';
import { Button } from '../Button';

export function ConfirmAction(props: iConfirmActionProps) {
  const { onCancel, onConfirm } = props;

  return (
    <div className={styles.container}>
      <h2 className={'g-title'}>
        Are you sure you want to delete this item?
      </h2>

      <div className={styles.inlineButtons}>
        <Button
          type={'button'}
          className={`${styles.button} ${styles.buttonCancel}`}
          color={'white'}
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          type={'button'}
          className={styles.button}
          color={'red'}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
