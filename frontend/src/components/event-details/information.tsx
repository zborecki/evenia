import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventDetailsInformationProps } from '#components/event-details/props';

const Information: FC<EventDetailsInformationProps> = ({
  description, details
}) => {
  const t = useTranslations('Event');

  return (
    <div className="evenia-event-details__information">
      <p className="evenia-event-details__description">{ description }</p>
      {
        details ? (
          <>
            <h2 className="evenia-event-details__agenda">{ t('agenda') }</h2>
            <p>{ details }</p>
          </>
        ) : undefined
      }
    </div>
  );
};

export { Information };
