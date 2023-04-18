import { Outlet } from 'react-router-dom';

import { Header } from '../../partials';
import styles from './app.module.scss';

export function AppWrapper() {
  return (
    <div className={styles.container}>
      <Header>
        CodeLeap Network
      </Header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
