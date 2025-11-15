'use client';

import React from 'react';
import { Comments } from '@/actions/photo-get';
import { PhotoCommentsProps } from './photo-comments';
import { useFormStatus } from 'react-dom';
import ErrorMessage from '../helper/error-message';
import EnviarIcon from '../icons/enviar-icon';
import style from '@/css/Photo-comments-form.module.css';
import CommentPost from '@/actions/comment-post';

type PhotoCommentsFormProps = PhotoCommentsProps & {
  setComments: React.Dispatch<React.SetStateAction<Comments[] | undefined>>;
};

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={style.button} disabled={pending}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm({
  id,
  setComments,
  single,
}: PhotoCommentsFormProps) {
  const [state, action] = React.useActionState(CommentPost, {
    ok: false,
    data: null,
    error: '',
  });

  React.useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...(comments ?? []), state.data]);
      setComment('');
    }
  }, [state, setComments]);

  const [comment, setComment] = React.useState('');

  return (
    <>
      <form
        action={action}
        className={`${style.form} ${single ? style.single : ''}`}
      >
        <input type="hidden" name="id" id="id" value={id} />
        <textarea
          className={style.textarea}
          name="comment"
          id="comment"
          placeholder="Comente..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <FormButton />
        <ErrorMessage error={state.error} />
      </form>
    </>
  );
}
