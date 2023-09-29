import { FC } from 'react';

import { BaseProps } from '#types/common';
import '#components/loader/styles.scss';

const Loader: FC<BaseProps> = ({ className = '' }) => (
  <div className={`evenia-loader ${className}`}>
    <span className="evenia-loader__spinner" />
  </div>
);

export { Loader };
