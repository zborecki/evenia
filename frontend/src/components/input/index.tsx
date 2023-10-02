'use client';

import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';

import { Button } from '#components/input/button';
import { InputProps } from '#components/input/props';
import { ErrorIcon } from '#svg/error-icon';
import '#components/input/styles.scss';

const Input: FC<InputProps> = ({
  errors,
  id,
  onChange,
  placeholder,
  touched,
  type = 'text',
  value
}) => {
  const t = useTranslations('Form');
  const [visibility, setVisibility] = useState<'password' | 'text'>('password');

  const showPassword = useCallback(() => {
    setVisibility((state) => (state === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <div className="evenia-input">
      <input
        className={`evenia-input__field ${errors ? 'evenia-input__field--error' : ''} ${type === 'password' ? 'evenia-input__field--password' : ''}`}
        id={id}
        name={id}
        placeholder={placeholder}
        type={type === 'password' ? visibility : type}
        value={value}
        onChange={onChange}
      />
      { type === 'password' ? <Button errors={errors} onClick={showPassword} /> : null }
      { errors && touched && type !== 'password' ? <ErrorIcon className="evenia-input__icon" /> : null }
      { errors && touched ? <p className="evenia-input__error">{ t(errors) }</p> : null }
    </div>
  );
};

export { Input };
