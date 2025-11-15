import type { Photo } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/css/Feed.module.css';

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo) => (
        <li className={styles.photo} key={photo.id}>
          <Link href={`/foto/${photo.id}`} scroll={false}>
            <Image
              src={photo.src}
              alt={photo.title}
              width={1000}
              height={1000}
              sizes="80vw"
              loading="eager"
            />

            <span className={styles.visualizacao}>{photo.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
