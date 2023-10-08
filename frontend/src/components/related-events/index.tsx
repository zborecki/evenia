'use client';

import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { InteractiveEvents } from '#components/interactive-events';
import { RelatedEventsProps } from '#components/related-events/props';
import { usePaginatedEvents } from '#hooks/usePaginatedEvents';

import '#components/related-events/styles.scss';

const RelatedEvents: FC<RelatedEventsProps> = ({ categoryName }) => {
  const t = useTranslations('Event');
  const { initializeEvents } = usePaginatedEvents({ categoryName, offset: 4 });

  return (
    <section className="evenia-related-events">
      <div className="evenia-related-events__container">
        <h2 className="evenia-related-events__title">
          { t('related_events') }
        </h2>
        <InteractiveEvents initializeEvents={initializeEvents} />
      </div>
    </section>
  );
};

export { RelatedEvents };
