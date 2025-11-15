import PhotoGet from '@/actions/photo-get';
import PhotoContent from '@/components/photo/photo-content';
import { notFound } from 'next/navigation';

type PhotoIdParams = {
  params: { id: string };
};

export async function generateMetadata({ params }: PhotoIdParams) {
  const { id } = await params;
  const { data } = await PhotoGet(id);

  if (!data) return { title: 'Fotos' };
  return {
    title: data.photo.title,
  };
}

export default async function FotoIdPage({ params }: PhotoIdParams) {
  const { id } = await params;
  const { data } = await PhotoGet(id);

  if (!data) return notFound();
  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
