import { HTMLProps, PropsWithChildren, ReactElement } from 'react';

import { Link, ProtectedLink } from '#props/common';

export interface BaseProps {
  className?: string;
}

export type ButtonProps = {
  as?: 'a' | 'button';
  size?: 'medium';
  variant?: 'contained' | 'outlined';
} & HTMLProps<HTMLButtonElement & HTMLAnchorElement> & Link;

export interface FooterLinksProps {
  links: ProtectedLink[];
}

export interface InteractiveSEOProps {
  ariaLabel?: string;
}

export interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  }
}

export interface TooltipProps {
  children: ReactElement<any, any>;
  position?: 'right';
  title: string;
}
