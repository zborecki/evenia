import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventOverviewAuthorProps } from './props';

const Author: FC<EventOverviewAuthorProps> = ({ author }) => {
  const t = useTranslations('Event');

  return (
    <p className="evenia-event-overview__author">
      { t('created_by') }
      <span className="evenia-event-overview__author--highlighted">
        { ` ${author}` }
      </span>
    </p>
  );
};

export { Author };
