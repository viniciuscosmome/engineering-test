import styles  from './header.module.scss';

export function Header({children}: {children: React.ReactNode}) {
  return (
    <header className={styles.header}>
      <h1 className={`${styles.title} g-title`}>
        {children}
      </h1>
    </header>
  );
}
