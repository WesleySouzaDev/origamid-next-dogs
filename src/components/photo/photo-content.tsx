'use client';

import style from '@/css/Photo-content.module.css';
import PhotoComments from '@/components/photo/photo-comments';

import PhotoDeleteButton from '@/components/photo/photo-delete';
import Link from 'next/link';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import { PhotoData } from '@/actions/photo-get';

const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const { photo, comments } = data;
  const { user } = useUser();

  return (
    <div className={`${style.photo} ${single ? style.single : ''}`}>
      <div className={style.img}>
        <Image alt={photo.title} src={photo.src} width={1000} height={1000} />
      </div>
      <div className={style.details}>
        <div>
          <p className={style.author}>
            {user && user.username === photo.author ? (
              <PhotoDeleteButton id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={style.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade === '1'
                ? `${photo.idade} ano`
                : `${photo.idade} anos`}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments
        id={String(photo.id)}
        comments={comments}
        single={single}
      />
    </div>
  );
};

export default PhotoContent;
