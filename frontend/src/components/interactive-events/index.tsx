'use client';

import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Cards } from './cards';

import { SeeMoreButton } from '#components/interactive-events/button';
import { AppDispatch } from '#libraries/redux';
import { InteractiveEventsProps } from '#props/components';
import { FETCH_EVENTS } from '#reducers/events-reducers';
import { eventsSelector } from '#slices/events-slice';

import '#components/interactive-events/styles.scss';

const InteractiveEvents: FC<InteractiveEventsProps> = ({ categoryName = '', offset }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: { events }, isLoading } = useSelector(eventsSelector);

  useEffect(() => {
    dispatch(FETCH_EVENTS({ categoryName, offset }));
  }, [dispatch, categoryName, offset]);

  return (
    <>
      <Cards
        events={events}
        isLoading={isLoading}
        offset={offset}
      />
      {
        events.length >= offset
          ? <SeeMoreButton initialOffset={offset} />
          : undefined
      }
    </>
  );
};

export { InteractiveEvents };
