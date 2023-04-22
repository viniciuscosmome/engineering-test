import { useNavigate } from 'react-router-dom';

import { IcArrowRight } from '../../icons';
import { useAppDispatch } from '../../../redux/hooks';
import { logout } from '../../../actions/user.slice';
import styles  from './header.module.scss';

export function Header({children}: {children: React.ReactNode}) {
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
