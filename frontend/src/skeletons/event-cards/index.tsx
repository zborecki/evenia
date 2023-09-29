import { FC } from 'react';

import { EventCardSkeleton } from '#skeletons/event-card';
import { EventCardSkeletonsProps } from '#skeletons/event-cards/props';

const EventCardSkeletons: FC<EventCardSkeletonsProps> = ({
  count
}) => Array.from(Array(count).keys()).map((index) => (
  <li key={`EventCardSkeleton-${index}`}>
    <EventCardSkeleton />
  </li>
));

export { EventCardSkeletons };
