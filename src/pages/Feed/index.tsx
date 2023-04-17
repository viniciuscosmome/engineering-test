import { useState } from 'react';

import { Form, Input, Textarea } from '../../components/forms';
import { Button } from '../../components/partials';
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
        changeButtonState={changeButtonStateByTitle}
        required={true}
      />

      <Textarea
        label={'Content'}
        placeholder={'Content here'}
        labelClass={styles.label}
        minLength={5}
        changeButtonState={changeButtonStateByText}
        required={true}
      />

      <Button type={'submit'} fit={'right'} disabled={disableButton} className={styles.submit}>
        Create
      </Button>
    </Form>
  );
}

export function FeedPage() {
  return (
    <>
      <section className={styles.section}>
        <FormContent />
      </section>
    </>
  );
}
