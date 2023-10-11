import { FC } from 'react';

import { BadgeProps } from '#components/badge/props';
import '#components/badge/styles.scss';

const Badge: FC<BadgeProps> = ({ children, variant = 'pending' }) => (
  <div className={`evenia-badge evenia-badge--${variant}`}>
    <span className={`evenia-badge__label evenia-badge__label--${variant}`}>
      { children }
    </span>
  </div>
);

export { Badge };
