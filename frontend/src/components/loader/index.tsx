import '#components/loader/styles.scss';
import { FC } from 'react';

import { BaseProps } from '#props/components';

const Loader: FC<BaseProps> = ({ className = '' }) => (
  <div className={`evenia-loader ${className}`}>
    <span className="evenia-loader__spinner" />
  </div>
);

export { Loader };
