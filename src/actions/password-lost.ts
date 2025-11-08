'use server';

import { PASSWORD_LOST } from '@/functions/api';
import ApiError from '@/functions/api-error';

export default async function PasswordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlPerdeu = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha o campo');

    const { url } = PASSWORD_LOST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, url: urlPerdeu }),
    });

    if (!response.ok) throw new Error('Email ou senha já cadastrados');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
