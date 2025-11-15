//Nessa Código temos um ótimo momento para realizarmos a verificação das informações do usuário
//Usando Zod ou regExps para validar os dados

'use server';

import { PHOTO_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';

export default async function PhotoPost(state: {}, formData: FormData) {
  const token = (await cookies()).get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as string | null;
  const peso = formData.get('peso') as string | null;
  const img = formData.get('img') as File;

  try {
    if (!token || !nome || !idade || !peso || img.size === 0)
      throw new Error('Preencha todos os campos');

    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok)
      throw new Error('Falha ao postar foto, tente novamente mais tarde');
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
