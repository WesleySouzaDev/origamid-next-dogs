'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import styles from '@/css/LoginForm.module.css';
import UserPost from '@/actions/user-post';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? 'Carregando...' : 'Cadastrar-se'}
    </Button>
  );
};

export default function LoginCadastroForm() {
  const [state, action] = useActionState(UserPost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="text"
          id="username"
          label="Nome"
          placeholder="Seu nome..."
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Seu email..."
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          placeholder="Sua senha..."
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
