import Image from 'next/image';

import styles from '@/css/Footer.module.css';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/assets/dogs-footer.svg"
        alt="Logo Footer"
        width={28}
        height={22}
      />

      <p>Projeto Next.js com Dogs API</p>
    </footer>
  );
}
