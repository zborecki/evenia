'use client';

import { FC, useCallback, useState } from 'react';

import { InputButtonProps } from '#props/components';
import VisibilityIcon from '#svg/visibility-icon';
import VisibilityOffIcon from '#svg/visibility-off-icon';

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
      { isActivated ? <VisibilityOffIcon /> : <VisibilityIcon /> }
    </button>
  );
};

export { Button };
