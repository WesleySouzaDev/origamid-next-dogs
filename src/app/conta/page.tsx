import PhotosGet from '@/actions/photos-get';
import UserGet from '@/actions/user-get';
import Feed from '@/components/feed/feed';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minha Conta',
  description: 'Informações da conta',
};

export default async function ContaPage() {
  const { data: user } = await UserGet();
  const { data } = await PhotosGet({ user: user?.username });

  return (
    <section>
      {data?.length ? (
        <Feed photos={data} user={user?.username} />
      ) : (
        <div>
          <p
            style={{
              color: '#333',
              fontSize: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            Não existe fotos postadas{' '}
          </p>
          <Link
            href="/conta/postar"
            className="button "
            style={{ display: 'inline-block' }}
          >
            poste uma foto
          </Link>
        </div>
      )}
    </section>
  );
}
