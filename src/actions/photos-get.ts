'use server';

import { PHOTOS_GET } from '@/functions/api';
import ApiError from '@/functions/api-error';

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: number;
};

type PhtotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export default async function PhotosGet({
  page = 1,
  total = 6,
  user = 0,
}: PhtotosGetParams = {}) {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const response = await fetch(url);

    if (!response.ok) throw new Error('Erro ao pegar as fotos');
    const data = (await response.json()) as Photo[];
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
