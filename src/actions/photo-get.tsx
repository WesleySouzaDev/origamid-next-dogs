'use server';

import { PHOTO_GET } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { Photo } from './photos-get';

export type Comments = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comments[];
};

export default async function PhotoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) throw new Error('Erro ao pegar as fotos');
    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
