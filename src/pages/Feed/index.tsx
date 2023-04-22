import { FormEvent, useState } from 'react';

import type { iFormPostProps, iPostProps } from './feed';
import { ModalWrapper } from '../../components/wrappers';
import { Form, Input, Textarea } from '../../components/forms';
import { Button, ConfirmAction } from '../../components/partials';
import { IcDeleteForever, IcEdit } from '../../components/icons';
import styles from './feed.module.scss';

function FormPost(props: iFormPostProps) {
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

function Post() {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const {id, username, createdAt, title, content} = {
    id: 'random-id',
    username: 'random-username',
    createdAt: Date.now(),
    title: 'post title',
    content: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit.'
  };
  const [idToDelete, setIdToDelete] = useState<string | null>(null);

  const toggleScrollState = (): void => {
    const bodyStyle = document.body.style;
    bodyStyle.overflow = (bodyStyle.overflow === 'hidden') ? 'auto' : 'hidden';
  };

  const changeEditModalState = (): void => {
    const isOpenEditModal = !openEditModal;
    setOpenEditModal(isOpenEditModal);
    toggleScrollState();
  };

  const changeConfirmModalState = (): void => {
    const isOpenConfirmModal = !openConfirmModal;
    setOpenConfirmModal(isOpenConfirmModal);
    toggleScrollState();

    setIdToDelete(idToDelete ? null : id);
  };

  const onConfirmAction = (): void => {
    changeConfirmModalState();
  };

  return (
    <>
      {openEditModal && (
        <ModalWrapper changeModalState={changeEditModalState}>
          <FormPost id={id} title={title} content={content} onCancel={changeEditModalState} />
        </ModalWrapper>
      )}

      {openConfirmModal && (
        <ModalWrapper changeModalState={changeConfirmModalState}>
          <ConfirmAction
            onCancel={changeConfirmModalState}
            onConfirm={onConfirmAction}
          />
        </ModalWrapper>
      )}

      <article className={`${styles.post} g-anim-grow`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} g-title`}>
            {title}
          </h2>

          <button
            title={'Delete'}
            className={styles.action}
            onClick={changeConfirmModalState}
          >
            <IcDeleteForever size={'2rem'} />
          </button>

          <button
            title={'Edit'}
            className={styles.action}
            onClick={changeEditModalState}
          >
            <IcEdit size={'2rem'} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.username}>
            {username}
          </div>

          <div className={styles.timestamp}>
            {createdAt}
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              {content}
            </p>
          </div>
        </div>
      </article>
    </>
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
