import StatsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
  }
);

export const metadata: Metadata = {
  title: 'Estatísticas | Conta',
  description: 'Estatísticas da conta',
};

export default async function EstatisticasPage() {
  const { data } = await StatsGet();

  if (!data) return null;
  return (
    <section className="container">
      <ContaEstatisticas data={data} />
    </section>
  );
}
