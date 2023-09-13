import { PropsWithChildren } from 'react';

export interface BaseProps {
  className?: string;
}

export interface LayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  }
}
