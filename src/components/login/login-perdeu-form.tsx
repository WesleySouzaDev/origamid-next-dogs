'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import styles from '@/css/LoginForm.module.css';
import PasswordLost from '@/actions/password-lost';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? 'Carregando...' : 'Enviar E-mail'}
    </Button>
  );
};

export default function LoginPerdeuForm() {
  const [state, action] = useActionState(PasswordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(`${window.location.href.replace('perdeu', 'resetar')}`);
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input
          type="text"
          id="login"
          label="Email / Usuário"
          placeholder="Digite seu email / usuário..."
        />
        <input type="hidden" name="url" value={url} />

        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: '#4c1', marginTop: '1rem' }}>
            Email enviado com sucesso!
          </p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
