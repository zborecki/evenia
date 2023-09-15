import { FC, HTMLProps } from 'react';
import '#components/button/styles.scss';

type ButtonProps = {
  as?: 'a' | 'button';
  href?: string;
  children?: string;
  size?: 'medium';
  variant?: 'contained' | 'outlined';
} & HTMLProps<HTMLButtonElement & HTMLAnchorElement>;

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
