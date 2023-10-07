import { HTMLProps } from 'react';

import { ILink } from '#types/common';

export type DropdownItemProps = {
  as?: 'a' | 'button';
} & HTMLProps<HTMLButtonElement> & ILink;
