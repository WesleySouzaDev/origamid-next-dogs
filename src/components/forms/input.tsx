'use client';
import React from 'react';

import styles from '@/css/Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({
  type,
  id,
  placeholder,
  error,
  label,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
