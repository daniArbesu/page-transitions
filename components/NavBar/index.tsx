import Link from 'next/link';
import styles from './style.module.css';
import { navlinks } from '@/constants/navlinks';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Arbesu</Link>
      </div>
      <ul className={styles.navLinks}>
        {navlinks.map(({ title, url }, index) => (
          <li className={styles.navItem} key={index}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
