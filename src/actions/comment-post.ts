//Nessa Código temos um ótimo momento para realizarmos a verificação das informações do usuário
//Usando Zod ou regExps para validar os dados

'use server';

import { COMMENTS_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import { cookies } from 'next/headers';
import { Comments } from './photo-get';

export default async function CommentPost(state: {}, formData: FormData) {
  const token = (await cookies()).get('token')?.value;
  const comment = formData.get('comment') as string | null;
  const id = formData.get('id') as string | null;

  try {
    if (!token || !comment || !id)
      throw new Error('Preencha o campo para postar um comentário');

    const { url } = COMMENTS_POST(id);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok)
      throw new Error(
        'Falha ao postar um novo comentário, tente novamente mais tarde'
      );
    const data = (await response.json()) as Comments;

    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
