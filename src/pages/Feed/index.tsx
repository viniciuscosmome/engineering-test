import { useEffect, useRef } from 'react';
import { FormPost, PostSection } from '../';
import styles from './feed.module.scss';
import { IcArrowUp } from '../../components/icons';

import { useAppDispatch } from '../../redux/hooks';
import { fetchLatesUpdatesAsync } from '../../actions/posts';

export function FeedPage() {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    const anchor = document.querySelector('#form-new-post') as HTMLSpanElement;
    const threeMinutes = 18e4;

    const Observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        dispatch(fetchLatesUpdatesAsync());
      }

      Observer.unobserve(anchor);
    });

    const timer = setInterval(() => {
      if (anchor) {
        Observer.observe(anchor);
      }
    }, threeMinutes);

    return () => (clearInterval(timer));
  }, []);

  return (
    <>
      <section id={'form-new-post'} className={styles.section}>
        <FormPost />
      </section>

      <PostSection />

      <button
        ref={buttonRef}
        className={`${styles.backToTop} g-button-blue`}
        onClick={onClick}
      >
        <IcArrowUp size={42} />
      </button>
    </>
  );
}
