import type { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

export default async function Feed({ photos }: { photos: Photo[] }) {
  return (
    <>
      <FeedPhotos photos={photos} />
    </>
  );
}
