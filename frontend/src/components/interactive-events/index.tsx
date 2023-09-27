'use client';

import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '#components/button';
import { EventCard } from '#components/event-card';
import { AppDispatch } from '#libraries/redux';
import { InteractiveEventsProps } from '#props/components';
import { FETCH_EVENTS } from '#reducers/events-reducers';
import { eventsSelector } from '#slices/events-slice';

import '#components/interactive-events/styles.scss';

const InteractiveEvents: FC<InteractiveEventsProps> = ({ endpoint, initialEvents, offset }) => {
  const common = useTranslations('Common');
  const dispatch = useDispatch<AppDispatch>();
  const [events] = useState(initialEvents);
  const { data, isLoading } = useSelector(eventsSelector);

  useEffect(() => {
    dispatch(FETCH_EVENTS({ categoryId: '', offset }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ul className="evenia-interactive-events">
        {
          data.events.map((props) => (
            <li key={`InteractiveEvents-${props.title}-${props.author}`}>
              <EventCard {...props} />
            </li>
          ))
        }
      </ul>
      {
        events.length === offset
          ? (
            <Button as="button" className="evenia-interactive-events__button">
              { common('see_more') }
            </Button>
          )
          : undefined
      }
    </>
  );
};

export { InteractiveEvents };
