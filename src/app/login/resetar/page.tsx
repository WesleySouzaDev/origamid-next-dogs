import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resete sua senha | Dogs',
  description: 'Resete sua senha',
};

export type SearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({ searchParams }: SearchParams) {
  return (
    <div>
      <section className="animeLeft">
        <h1 className="title">Resete sua senha</h1>
        <LoginResetarForm
          keyToken={searchParams.key}
          login={searchParams.login}
        />
      </section>
    </div>
  );
}
