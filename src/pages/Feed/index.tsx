import { useState } from 'react';

import type { iFormPost } from './feed';
import { Form, Input, Textarea } from '../../components/forms';
import { Button } from '../../components/partials';
import { IcDeleteForever, IcEdit } from '../../components/icons';
import styles from './feed.module.scss';

export function FormPost({title, content}: iFormPost) {
  const [disableButtonByTitle, setDisableButtonByTitle] = useState<boolean>(true);
  const [disableButtonByText, setDisableButtonByText] = useState<boolean>(true);
  const disableButton = (disableButtonByTitle || disableButtonByText);

  const changeButtonStateByTitle = (disable = false) => setDisableButtonByTitle(disable);
  const changeButtonStateByText = (disable = false) => setDisableButtonByText(disable);

  return (
    <Form title={'What\'s on your mind?'} className={styles.form}>
      <Input
        label={'Title'}
        placeholder={'Hello world'}
        labelClass={styles.label}
        minLength={2}
        maxLength={200}
        value={title}
        changeButtonState={changeButtonStateByTitle}
        required={true}
      />

      <Textarea
        label={'Content'}
        placeholder={'Content here'}
        labelClass={styles.label}
        minLength={2}
        maxLength={3000}
        value={content}
        changeButtonState={changeButtonStateByText}
        required={true}
      />

      <Button type={'submit'} fit={'right'} disabled={disableButton} className={styles.submit}>
        Create
      </Button>
    </Form>
  );
}

function Post() {
  return (
    <article className={`${styles.post} g-anim-grow`}>
      <div className={styles.header}>
        <h2 className={`${styles.title} g-title`}>
          My First Post at CodeLeap Network!
        </h2>

        <button title={'Delete'} className={styles.action}>
          <IcDeleteForever size={'1.5rem'} />
        </button>

        <button title={'Edit'} className={styles.action}>
          <IcEdit size={'1.5rem'} />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.username}>
          @Victor
        </div>

        <div className={styles.timestamp}>
          25 minutes ago
        </div>

        <div className={styles.content}>
          <p className={styles.paragraph}>
            Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          </p>

          <p className={styles.paragraph}>
            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
          </p>
        </div>
      </div>
    </article>
  );
}

export function FeedPage() {
  return (
    <>
      <section className={styles.section}>
        <FormPost />
      </section>

      <section className={styles.section}>
        <Post />
      </section>
    </>
  );
}
