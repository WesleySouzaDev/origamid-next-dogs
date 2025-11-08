'use server';

import { USER_GET } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

export default async function UserGet() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) throw new Error('Token inválido');
    const { url } = USER_GET();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error('Erro ao recuperar dados do usuário');
    const data = (await response.json()) as User;

    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
