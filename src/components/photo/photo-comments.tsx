'use client';

import React from 'react';
import PhotoCommentsForm from '@/components/photo/photo-comments-form';
import style from '@/css/Photo-comments.module.css';
import { useUser } from '@/context/user-context';
import { Comments } from '@/actions/photo-get';

export type PhotoCommentsProps = {
  id: string;
  single: boolean;
  comments?: Comments[];
};

const PhotoComments = (props: PhotoCommentsProps) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);

  const { user } = useUser();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${style.comments} ${props.single ? style.single : ''}`}
      >
        {comments?.map((item) => (
          <li key={item.comment_ID}>
            <b>{item.comment_author}: </b>
            <span>{item.comment_content}</span>
          </li>
        ))}
      </ul>

      <React.Activity mode={user ? 'visible' : 'hidden'}>
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      </React.Activity>
    </>
  );
};

export default PhotoComments;
