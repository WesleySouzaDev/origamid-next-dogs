import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="title" style={{ margin: '2rem 0rem' }}>
        404: Página não encontrada
      </h1>
      <Link className="button" href="/">
        Voltar para a página inicial
      </Link>
    </section>
  );
}
