import { useEffect, useRef } from 'react';
import { FormPost, PostSection } from '../';
import styles from './feed.module.scss';
import { IcArrowUp } from '../../components/icons';

export function FeedPage() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
        buttonRef.current?.classList.add(styles.show);
      } else {
        buttonRef.current?.classList.remove(styles.show);
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className={styles.section}>
        <FormPost />
      </section>

      <PostSection />

      <button
        ref={buttonRef}
        className={`${styles.backToTop} g-button-blue`}
        onClick={onClick}
      >
        <IcArrowUp />
      </button>
    </>
  );
}
