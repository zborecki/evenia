'use client';

import { FC, useCallback, useState } from 'react';

import { InputButtonProps } from '#components/input/props';
import { VisibilityOffIcon } from '#svg/visibility-off-icon';
import { VisibilityOnIcon } from '#svg/visibility-on-icon';

const Button: FC<InputButtonProps> = ({ errors, onClick }) => {
  const [isActivated, setIsActivated] = useState(false);

  const switchMode = useCallback(() => {
    setIsActivated((previous) => !previous);
    onClick();
  }, [onClick]);

  return (
    <button
      className={`evenia-input__button ${errors ? 'evenia-input__button--error' : ''}`}
      type="button"
      onClick={switchMode}
    >
      { isActivated ? <VisibilityOffIcon /> : <VisibilityOnIcon /> }
    </button>
  );
};

export { Button };
