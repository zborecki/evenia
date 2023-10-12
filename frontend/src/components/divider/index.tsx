import '#components/divider/styles.scss';
import { FC } from 'react';

import { BaseProps } from '#types/common';

const Divider: FC<BaseProps> = ({ className = '' }) => (
  <div className={`evenia-divider ${className}`} />
);

export { Divider };
