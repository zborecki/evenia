import { FC, PropsWithChildren } from 'react';

import { BaseProps } from '#types/common';

const Grid: FC<BaseProps & PropsWithChildren> = ({ children, className = '' }) => (
  <ul className={`evenia-interactive-events ${className}`}>
    { children }
  </ul>
);

export { Grid };
