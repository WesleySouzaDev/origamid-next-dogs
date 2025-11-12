'use client';

import React from 'react';

import type { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';
import PhotosGet from '@/actions/photos-get';
import Loading from '@/components/helper/loading';
import style from '@/css/Feed.module.css';

export default function Feed({
  photos,
  user,
}: {
  photos: Photo[];
  user?: 0 | string;
}) {
  const [photosFeed, setPhotosFeed] = React.useState<Photo[]>(photos);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [infinity, setInfinity] = React.useState(
    photos.length < 6 ? false : true
  );

  const fetching = React.useRef(false);

  function infinityScroll() {
    if (fetching.current) return;
    fetching.current = true;
    setLoading(true);

    setTimeout(() => {
      setPage((currentPage) => currentPage + 1);
      fetching.current = false;
      setLoading(false);
    }, 1000);
  }

  React.useEffect(() => {
    if (page === 1) return;
    async function getPagePhotos() {
      const actionData = await PhotosGet({ page, total: 6, user: 0 });
      if (actionData && actionData.data !== null) {
        const { data } = actionData;
        setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);
        if (data.length < 6) setInfinity(false);
      }
    }

    getPagePhotos();
  }, [page]);

  React.useEffect(() => {
    if (infinity) {
      window.addEventListener('scroll', infinityScroll);
      window.addEventListener('wheel', infinityScroll);
    } else {
      window.removeEventListener('scroll', infinityScroll);
      window.removeEventListener('wheel', infinityScroll);
    }

    return () => {
      window.removeEventListener('scroll', infinityScroll);
      window.removeEventListener('wheel', infinityScroll);
    };
  }, [infinity]);

  return (
    <>
      <FeedPhotos photos={photosFeed} />
      <div className={style.loadingWrapper}>
        {infinity ? loading && <Loading /> : <p>Não existem mais postagens.</p>}
      </div>
    </>
  );
}
