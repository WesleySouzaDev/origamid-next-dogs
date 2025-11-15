'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import styles from '@/css/LoginForm.module.css';
import PasswordReset from '@/actions/password-reset';
import type { SearchParams } from 'next/dist/server/request/search-params';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? 'Carregando...' : 'Resetar Senha'}
    </Button>
  );
};

export default function LoginResetarForm({ keyToken, login }: SearchParams) {
  const [state, action] = useActionState(PasswordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="password"
          id="password"
          label="Nova Senha"
          placeholder="Digite sua nova senha..."
        />
        <input type="hidden" name="login" value={login} />
        <input type="hidden" name="key" value={keyToken} />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
}
