import { ReactElement } from 'react';

export interface InteractiveSEOProps {
  ariaLabel?: string;
}

export interface TooltipProps {
  children: ReactElement<any, any>;
  position?: 'right';
  title: string;
}
