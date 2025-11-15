'use server';

import { TOKEN_VALIDATE_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function ValidateToken() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) throw new Error('Acesso negado');

    const { url } = TOKEN_VALIDATE_POST();

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Erro ao validar token');
    const data = await response.json();

    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
