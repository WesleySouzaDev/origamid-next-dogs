import PhotosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const { data } = await PhotosGet();

  return (
    <section className="container mainContainer">
      {data?.length && <Feed photos={data} />}
    </section>
  );
}
