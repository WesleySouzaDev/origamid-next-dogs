import Link from 'next/link';
import styles from '@/css/Header.module.css';
import Image from 'next/image';
import UserGet from '@/actions/user-get';

export default async function Header() {
  const { data } = await UserGet();

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          <Image src="/assets/dogs.svg" alt="Logo" width={28} height={22} />
        </Link>

        {data ? (
          <Link className={styles.login} href="/conta">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Cadastro
          </Link>
        )}
      </nav>
    </header>
  );
}
