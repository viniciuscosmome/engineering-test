import { useNavigate } from 'react-router-dom';

import { IcArrowRight } from '../../icons';
import { useAppDispatch } from '../../../redux/hooks';
import { logout } from '../../../actions/user';
import styles  from './header.module.scss';

export function Header(props: iHeaderProps) {
  const { children } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} g-title`}>
        {children}
      </h1>

      <button type={'button'} className={styles.logout} onClick={onClick}>
        <IcArrowRight />
      </button>
    </header>
  );
}
