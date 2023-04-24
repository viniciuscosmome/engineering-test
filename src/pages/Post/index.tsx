import { useEffect, useState } from 'react';

import { FormPost } from '../';
import { ModalWrapper } from '../../components/wrappers';
import { IcDeleteForever, IcEdit } from '../../components/icons';
import { ConfirmAction } from '../../components/partials';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectPosts, fetchDataAsync } from '../../actions/posts';
import { selectUser } from '../../actions/user';
import styles from './post.module.scss';

function Post(props: iPostProps) {
  const userConnected = useAppSelector(selectUser);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const {id, username, title, content, created_datetime} = props;
  const [idToDelete, setIdToDelete] = useState<number | null>(null);

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

      <article className={`${styles.post} g-anim-grow`} data-post>
        <div className={styles.header}>
          <h2 className={`${styles.title} g-title`}>
            {title}
          </h2>

          {userConnected.username === username && (
            <>
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
            </>
          )}
        </div>

        <div className={styles.body}>
          <div className={styles.username}>
            {username}
          </div>

          <div className={styles.timestamp}>
            {String(created_datetime)}
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

export function PostSection() {
  const [dataPresent, setDataPresent] = useState<boolean>(false);
  const [round, setRound] = useState<number>(-1);
  const postsState = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const morePosts = !!postsState.data.next;

  useEffect(() => {
    if ((!postsState.loading && morePosts) || !dataPresent) {
      dispatch(fetchDataAsync(round));
      setDataPresent(true);
    }
  }, [round]);

  useEffect(() => {
    const Observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setRound(round => round + 1);
      }
    });

    Observer.observe(document.querySelector('#anchor') as HTMLSpanElement);
    return () => Observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {postsState.data.results.map((props) => <Post key={props.id} {...props} />)}

      <span id={'anchor'} />

      <span className={`${styles.morePosts} ${morePosts && 'g-anim-loading'}`}>
        {morePosts ? 'Loading more posts...' : 'No more posts'}
      </span>
    </section>
  );
}
