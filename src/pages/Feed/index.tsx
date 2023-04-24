import { FormPost, PostSection } from '../';
import styles from './feed.module.scss';

export function FeedPage() {
  return (
    <>
      <section className={styles.section}>
        <FormPost />
      </section>

      <PostSection />
    </>
  );
}
