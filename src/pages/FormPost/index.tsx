import { FormEvent, useState } from 'react';

import type { iFormPostProps } from './formpost';
import type { iPostProps } from '../Post/post';
import { Form, Input, Textarea } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './formpost.module.scss';

export function FormPost(props: iFormPostProps) {
  const [disableButtonByTitle, setDisableButtonByTitle] = useState<boolean>(true);
  const [disableButtonByText, setDisableButtonByText] = useState<boolean>(true);
  const {id, title, content, onCancel} = props;
  const initialData: Partial<iPostProps> = {id, title, content};
  const isEditMode = !!id;
  const disableButton = isEditMode ? (disableButtonByTitle && disableButtonByText) : (disableButtonByTitle || disableButtonByText);

  const changeButtonStateByTitle = (disable = false) => setDisableButtonByTitle(disable);
  const changeButtonStateByText = (disable = false) => setDisableButtonByText(disable);

  const primaryAction = isEditMode ? 'Save' : 'Create';
  const primaryColor = isEditMode ? 'green' : 'blue';

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));

    if (initialData.id) {
      console.log('Edit post', formData);
    } else {
      console.log('New post', formData);
    }
  };

  return (
    <Form title={'What\'s on your mind?'} className={styles.form} onSubmit={onSubmit}>
      <Input
        name={'post_title'}
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
        name={'post_content'}
        label={'Content'}
        placeholder={'Content here'}
        labelClass={styles.label}
        minLength={2}
        maxLength={3000}
        value={content}
        changeButtonState={changeButtonStateByText}
        required={true}
      />

      <div className={styles.inlineButtons}>
        {isEditMode && (
          <Button
            type={'button'}
            className={styles.submit}
            color={'white'}
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}

        <Button
          type={'submit'}
          className={styles.submit}
          color={primaryColor}
          disabled={disableButton}
        >
          {primaryAction}
        </Button>
      </div>
    </Form>
  );
}
