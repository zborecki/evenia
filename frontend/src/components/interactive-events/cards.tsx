import { FC } from 'react';

import { EventCard } from '#components/event-card';
import { EventCard as Card } from '#props/common';
import { EventCardSkeletons } from '#skeletons/event-cards';

interface Props {
  events: Card[];
  isLoading: boolean;
  offset: number;
}

const Cards: FC<Props> = ({ events, isLoading, offset }) => (
  <ul className="evenia-interactive-events">
    {
      isLoading ? <EventCardSkeletons count={offset} /> : (
        events.map((props) => (
          <li key={`InteractiveEvents-${props.title}-${props.author}`}>
            <EventCard {...props} />
          </li>
        ))
      )
    }
  </ul>
);

export { Cards };
