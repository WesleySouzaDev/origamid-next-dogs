'use server';

import { PHOTOS_GET } from '@/functions/api';

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

export default async function PhotosGet() {
  const { url } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
  const response = await fetch(url);
  return (await response.json()) as Photo[];
}
