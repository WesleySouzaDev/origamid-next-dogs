//Nessa Código temos um ótimo momento para realizarmos a verificação das informações do usuário
//Usando Zod ou regExps para validar os dados

'use server';

import { USER_POST } from '@/functions/api';
import ApiError from '@/functions/api-error';
import Login from './login';

export default async function UserPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password || !email)
      throw new Error('Preencha todos os campos');

    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Email ou senha já cadastrados');

    const { ok } = await Login({ ok: true, error: '' }, formData);
    if (!ok) throw new Error('Falha ao fazer login');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return ApiError(error);
  }
}
