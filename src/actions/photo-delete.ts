'use server';

import { PHOTO_DELETE } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function PhotoDelete(id: string) {
  try {
    const { url } = PHOTO_DELETE(id);
    const token = (await cookies()).get('token')?.value;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Erro ao deletar foto');
  } catch (error: unknown) {
    return ApiError(error);
  }

  redirect('/conta');
}
