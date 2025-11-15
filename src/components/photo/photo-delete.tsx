'use client';
import React from 'react';
import style from '@/css/Photo-delete.module.css';
import PhotoDelete from '@/actions/photo-delete';

export default function PhotoDeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm('Tem certeza que deseja deletar essa foto?');
    if (confirm) {
      await PhotoDelete(id);
    }
    setLoading(false);
  }

  return (
    <>
      <React.Activity mode={loading ? 'hidden' : 'visible'}>
        <button onClick={handleClick} className={style.delete}>
          Deletar
        </button>
      </React.Activity>

      <React.Activity mode={loading ? 'visible' : 'hidden'}>
        <button disabled className={style.delete}>
          Deletando...
        </button>
      </React.Activity>
    </>
  );
}
