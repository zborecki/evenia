import { FC } from 'react';

import { ButtonProps } from '#props/components';
import '#components/button/styles.scss';

const Button: FC<ButtonProps> = ({
  as = 'a',
  children,
  className = '',
  hidden,
  href,
  size = 'medium',
  variant = 'contained',
  width = 'standard',
  ...rest
}) => {
  const Component = as === 'a' ? 'a' : 'button';

  return (
    <Component
      className={`evenia-button evenia-button--${size} evenia-button--${variant} evenia-button--${width} ${className}`}
      style={{
        display: hidden ? 'none' : undefined
      }}
      {...(as === 'a' ? { href } : { ...rest })}
    >
      { children }
    </Component>
  );
};

export { Button };
