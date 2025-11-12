import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estatísticas | Conta',
  description: 'Estatísticas da conta',
};

export default async function EstatisticasPage() {
  return (
    <section>
      <h1>Estatísticas</h1>
    </section>
  );
}
