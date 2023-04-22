import { useRef } from 'react';

import styles from './modal.module.scss';

export function ModalWrapper(props: iModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const {changeModalState, children} = props;

  return (
    <div ref={modalRef} className={styles.container}>
      <div className={styles.overlay} onClick={changeModalState} />
      <div className={`${styles.content} g-anim-grow`}>
        {children}
      </div>
    </div>
  );
}
