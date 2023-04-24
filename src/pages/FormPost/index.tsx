import { useState, useRef, useEffect } from 'react';

import { Form, Input, Textarea } from '../../components/forms';
import { Button } from '../../components/partials';
import styles from './formpost.module.scss';

export function FormPost(props: iFormPostProps) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const [disableButtonByTitle, setDisableButtonByTitle] = useState<boolean>(true);
  const [disableButtonByText, setDisableButtonByText] = useState<boolean>(true);
  const {id, title, content, onCancel} = props;
  const isEditMode = !!id;
  const disableButton = isEditMode ? (disableButtonByTitle && disableButtonByText) : (disableButtonByTitle || disableButtonByText);

  const changeButtonStateByTitle = (errorStatus = 'error') => setDisableButtonByTitle(errorStatus === 'error');
  const changeButtonStateByText = (errorStatus = 'error') => setDisableButtonByText(errorStatus === 'error');

  const primaryAction = isEditMode ? 'Save' : 'Create';
  const primaryColor = isEditMode ? 'green' : 'blue';

  const onSubmit = (event: iSubmitEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form));

    if (initialData.id) {
      console.log('Edit post', formData);
    } else {
      console.log('New post', formData);
    }
  };

  useEffect(() => {
    const titleInput = titleRef.current as HTMLInputElement;
    titleInput.value = title || '';

    const contentTextarea = contentRef.current as HTMLTextAreaElement;
    contentTextarea.value = content || '';
  }, []);

  return (
    <Form title={'What\'s on your mind?'} className={styles.form} onSubmit={onSubmit}>
      <Input
        ref={titleRef}
        name={'title'}
        label={'Title'}
        placeholder={'Hello world'}
        labelClass={styles.label}
        minLength={2}
        maxLength={200}
        changeButtonState={changeButtonStateByTitle}
        required={true}
      />

      <Textarea
        ref={contentRef}
        name={'content'}
        label={'Content'}
        placeholder={'Content here'}
        labelClass={styles.label}
        minLength={2}
        maxLength={3000}
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
