import { HTMLProps } from 'react';

import { BaseProps, ILink } from '#types/common';

export type ButtonProps = {
  as?: 'a' | 'button';
  hidden?: boolean;
  size?: 'medium';
  variant?: 'contained' | 'outlined';
  width?: 'full' | 'standard';
} & BaseProps & HTMLProps<HTMLButtonElement> & ILink;
