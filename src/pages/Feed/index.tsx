import { useState } from 'react';

import { Form, Input, Textarea } from '../../components/forms';
import { Button } from '../../components/partials';
import { IcDeleteForever, IcEdit } from '../../components/icons';
import styles from './feed.module.scss';

function FormContent() {
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
        changeButtonState={changeButtonStateByTitle}
        required={true}
      />

      <Textarea
        label={'Content'}
        placeholder={'Content here'}
        labelClass={styles.label}
        minLength={2}
        maxLength={3000}
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem dolorem, maxime, fuga quisquam provident libero sit suscipit natus pariatur blanditiis quidem nisi tempora dicta cupiditate quibusdam incidunt id quo!
          </p>

          <p className={styles.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem dolorem, maxime, fuga quisquam provident libero sit suscipit natus pariatur blanditiis quidem nisi tempora dicta cupiditate quibusdam incidunt id quo!
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
        <FormContent />
      </section>

      <section className={styles.section}>
        <Post />
      </section>
    </>
  );
}
