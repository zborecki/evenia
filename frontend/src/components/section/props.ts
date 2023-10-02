import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/common';

export interface SectionProps extends BaseProps, PropsWithChildren {
  title: string;
}
