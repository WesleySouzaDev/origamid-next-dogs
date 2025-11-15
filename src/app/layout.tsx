import type { Metadata } from 'next';
import './globals.css';

import { type_spectral } from '@/functions/fonts';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { UserContextProvider } from '@/context/user-context';

import UserGet from '@/actions/user-get';

export const metadata: Metadata = {
  title: 'Next Dogs',
  description: 'Projeto Next.js com Dogs API',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await UserGet();

  return (
    <html lang="pt-br">
      <body className={`${type_spectral.variable}`}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
