import { FC } from 'react';

import { ButtonProps } from '#props/components';
import '#components/button/styles.scss';

const Button: FC<ButtonProps> = ({
  as = 'a',
  children,
  href,
  size = 'medium',
  variant = 'contained',
  ...rest
}) => {
  const Component = as === 'a' ? 'a' : 'button';

  return (
    <Component
      className={`evenia-button evenia-button--${size} evenia-button--${variant}`}
      {...(as === 'a' ? { href } : { rest })}
    >
      { children }
    </Component>
  );
};

export { Button };
