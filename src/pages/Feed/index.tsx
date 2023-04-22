import { useState, useEffect } from 'react';

import type { iPostProps } from '../Post/post';
import { FormPost, Post } from '../';
import styles from './feed.module.scss';

const loadPost = (): iPostProps => ({
  id: Math.round(Math.random() * Date.now()),
  username: 'random-username',
  title: 'post title',
  content: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.',
  created_datetime: new Date(),
});

export function FeedPage() {
  const [posts, setPosts] = useState<Array<iPostProps>>([loadPost()]);

  const updatePosts = (newPost: Array<iPostProps>) => {
    const newList = [...posts, ...newPost];
    setPosts(newList);
  };

  const onScroll = (): void => {
    const windowHeight = window.innerHeight;
    const posts = document.querySelectorAll('[data-post]');
    const lastPost = posts[posts.length - 2] || posts[posts.length - 1] as HTMLElement;
    const topPos = lastPost.getBoundingClientRect().top;

    if (lastPost && topPos < windowHeight && posts.length < 100) {
      updatePosts([loadPost()]);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  });

  return (
    <>
      <section className={styles.section}>
        <FormPost />
      </section>

      <section className={styles.section}>
        {posts.map((props) => <Post key={props.id} {...props} />)}
      </section>
    </>
  );
}
