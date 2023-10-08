import { FC } from 'react';

import { EventBadgeProps } from '#components/event-badge/props';
import '#components/event-badge/styles.scss';

const EventBadge: FC<EventBadgeProps> = ({ children, icon, title }) => (
  <div className="evenia-event-badge">
    <div className="evenia-event-badge__icon">
      { icon }
    </div>
    <div>
      <h3 className="evenia-event-badge__title">
        { title }
      </h3>
      { children }
    </div>
  </div>
);

export { EventBadge };
