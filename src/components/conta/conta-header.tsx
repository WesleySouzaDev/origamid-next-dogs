'use client';

import React from 'react';

import MinhasFotosIcon from '@/components/icons/minhas-fotos-icon';
import EstatisticasIcon from '@/components/icons/estatisticas-icon';
import AdicionarIcon from '@/components/icons/adicionar-icon';
import SairIcon from '@/components/icons/sair-icon';

import style from '@/css/UserHeaderNav.module.css';
import useMedia from '@/hooks/useMedia';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logout from '@/actions/logout';
import { useUser } from '@/context/user-context';

function GetTitle(pathname: string) {
  switch (pathname) {
    case '/conta/estatisticas':
      return 'Estatísticas';
    case '/conta/postar':
      return 'Postar Foto';
    default:
      return 'Minha Conta';
  }
}

export default function ContaHeader() {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const { setUserState } = useUser();
  async function handleLogout() {
    await Logout();
    setUserState(null);
  }

  return (
    <header className={style.header}>
      <h1 className="title">{GetTitle(pathname)}</h1>
      {mobile && (
        <button
          aria-label="menu"
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname === '/conta' ? 'active' : ''}>
          <MinhasFotosIcon />
          {mobile && 'Feed'}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname === '/conta/estatisticas' ? 'active' : ''}
        >
          <EstatisticasIcon />
          {mobile && 'Estatísticas'}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname === '/conta/postar' ? 'active' : ''}
        >
          <AdicionarIcon />
          {mobile && 'Postar Foto'}
        </Link>

        <button onClick={handleLogout}>
          <SairIcon />
          {mobile && 'Sair'}
        </button>
      </nav>
    </header>
  );
}
