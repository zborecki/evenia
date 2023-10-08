import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventBadge } from '#components/event-badge';
import { EventDetailsDateProps } from '#components/event-details/props';
import { CalendarIcon } from '#svg/calendar-icon';

const DateAndTime: FC<EventDetailsDateProps> = ({ date }) => {
  const t = useTranslations('Event');

  return (
    <EventBadge icon={<CalendarIcon />} title={t('date_and_time')}>
      <p>{ date }</p>
    </EventBadge>
  );
};

export { DateAndTime };
