import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resete sua senha | Dogs',
  description: 'Resete sua senha',
};

export type SearchParams = {
  searchParams: Promise<{
    key: string;
    login: string;
  }>;
};

export default async function ResetarPage(props: SearchParams) {
  const searchParams = await props.searchParams;
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
