import { Outlet } from 'react-router-dom';

import styles from './auth.module.scss';

export function AuthWrapper() {
  return (
    <div className={styles.container}>
      AuthWrapper

      <Outlet />
    </div>
  );
}
