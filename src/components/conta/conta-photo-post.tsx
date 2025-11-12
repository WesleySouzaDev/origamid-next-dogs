'use client';

import { useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import React, { useActionState } from 'react';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import styles from '@/css/UserPhotoPost.module.css';
import PhotoPost from '@/actions/photo-post';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {pending ? 'Carregando...' : 'Postar foto'}
    </Button>
  );
};

export default function ContaPhotoPost() {
  const [state, action] = useActionState(PhotoPost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  const [img, setImg] = React.useState('');

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action} className={styles.form}>
        <Input
          type="text"
          id="nome"
          label="Nome"
          placeholder="Digite o nome do seu pet..."
        />
        <Input
          type="number"
          id="peso"
          label="Peso"
          placeholder="Digite o peso do seu pet..."
        />
        <Input
          type="number"
          id="idade"
          label="Idade"
          placeholder="Digite a idade do seu pet..."
        />
        <input
          onChange={handleChange}
          type="file"
          id="img"
          name="img"
          className={styles.file}
        />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </section>
  );
}
