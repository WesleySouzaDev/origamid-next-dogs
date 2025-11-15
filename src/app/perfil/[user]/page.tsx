import PhotosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

type UserIdParams = {
  params: { user: string };
};

export default async function PerfilUserPage({ params }: UserIdParams) {
  const { user } = await params;
  const { data } = await PhotosGet({ user });

  if (!data) return null;
  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <Feed photos={data} user={user} />
    </section>
  );
}
