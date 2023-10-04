import { PropsWithChildren } from 'react';

import { BaseProps } from '#types/common';

export interface SectionProps extends BaseProps, PropsWithChildren {
  density?: number;
  dotSize?: number;
  pattern?: boolean;
  title: string;
}
