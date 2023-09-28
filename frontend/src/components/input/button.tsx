'use client';

import { FC, useCallback, useState } from 'react';

import VisibilityIcon from '#svg/visibility-icon';
import VisibilityOffIcon from '#svg/visibility-off-icon';

interface Props {
  errors?: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ errors, onClick }) => {
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
