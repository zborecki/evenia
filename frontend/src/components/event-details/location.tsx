import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventBadge } from '#components/event-badge';
import { EventDetailsLocationProps } from '#components/event-details/props';
import { MarkerIcon } from '#svg/marker-icon';

const Location: FC<EventDetailsLocationProps> = ({ location }) => {
  const t = useTranslations('Event');

  return (
    <EventBadge icon={<MarkerIcon />} title={t('location')}>
      { location ?? 'ONLINE' }
    </EventBadge>
  );
};

export { Location };
