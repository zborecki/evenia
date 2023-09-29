import { ReactElement } from 'react';

export interface TooltipProps {
  children: ReactElement<any, any>;
  position?: 'right';
  title: string;
}
