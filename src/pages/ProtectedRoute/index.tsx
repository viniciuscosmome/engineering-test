import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../actions/user.slice';
import styles from './protectedroute.module.scss';

export function ProtectedRoute() {
  const navigate = useNavigate();
  const { isLogged } = useAppSelector(selectUser);

  if (!isLogged) {
    useEffect(() => navigate('/'));

    return (
      <div className={styles.container}>
        <h2>Unauthorized</h2>
        <h4 className={styles.loading}>redirecting...</h4>
      </div>
    );
  }

  return <Outlet />;
}
