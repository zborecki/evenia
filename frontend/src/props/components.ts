import { HTMLProps, ReactElement } from 'react';

export type ButtonProps = {
  as?: 'a' | 'button';
  children?: string;
  href?: string;
  size?: 'medium';
  variant?: 'contained' | 'outlined';
} & HTMLProps<HTMLButtonElement & HTMLAnchorElement>;

export interface InteractiveSEOProps {
  ariaLabel?: string;
}

export interface TooltipProps {
  children: ReactElement<any, any>;
  position?: 'right';
  title: string;
}
