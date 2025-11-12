import PhotoGet from '@/actions/photo-get';

type Params = {
  params: { id: string };
};

export default async function FotoIdPage({ params }: Params) {
  const { id } = await params;
  const { data } = await PhotoGet(id);

  if (!data) return null;
  return (
    <section className="container mainContainer">
      <h1>FotoID: {data.photo.title}</h1>
    </section>
  );
}
