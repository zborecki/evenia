'use client';

import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EventCard } from '#components/event-card';
import { InteractiveEventsProps } from '#props/components';
import { SET_EVENTS, eventsSelector } from '#slices/events-slice';

const InteractiveEvents: FC<InteractiveEventsProps> = ({ endpoint, initialEvents }) => {
  const dispatch = useDispatch();
  const [events] = useState(initialEvents);
  const { data } = useSelector(eventsSelector);

  useEffect(() => {
    dispatch(SET_EVENTS(initialEvents));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {
        events.map((props) => (
          <li key={`InteractiveEvents-${props.title}-${props.author}`}>
            <EventCard {...props} />
          </li>
        ))
      }
    </ul>
  );
};

export { InteractiveEvents };
