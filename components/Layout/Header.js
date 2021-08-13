import Link from "next/link";
import styles from "../../styles/Layout/components/Header.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>Start Asian Love</a>
      </Link>
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/news/1">
            <a>News</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/support">
            <a>Support</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/wins">
            <a>Wins</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
