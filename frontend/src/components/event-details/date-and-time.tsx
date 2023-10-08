import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventDetailsDateProps } from '#components/event-details/props';

const DateAndTime: FC<EventDetailsDateProps> = ({ date }) => {
  const t = useTranslations('Event');

  return (
    <div className="evenia-event-details__date-and-time">
      <h3 className="evenia-date-and-time__title">
        { t('date_and_time') }
      </h3>
      <p>{ date }</p>
    </div>
  );
};

export { DateAndTime };
