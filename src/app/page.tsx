import PhotosGet from '@/actions/photos-get';
import UserGet from '@/actions/user-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const data = await PhotosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
      <div onClick={UserGet} style={{ width: '20rem', height: '20rem' }}></div>
    </section>
  );
}
