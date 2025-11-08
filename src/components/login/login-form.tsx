'use client';

import Login from '@/actions/login';
import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import Link from 'next/link';
import styles from '@/css/LoginForm.module.css';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>{pending ? 'Carregando...' : 'Login'}</Button>
  );
};

export default function LoginForm() {
  const [state, action] = useActionState(Login, {
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
          type="password"
          id="password"
          label="Senha"
          placeholder="Sua senha..."
        />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <Link className={styles.perdeu} href="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>

        <p>Ainda não possui conta? Cadastre-se agora!</p>
        <Link className="button" href="/login/cadastro">
          Cadastrar-se
        </Link>
      </div>
    </>
  );
}
