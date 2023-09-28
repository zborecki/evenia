import { FC } from 'react';

import { EventCardSkeleton } from '#skeletons/event-card';

interface Props {
  count: number;
}

const EventCardSkeletons: FC<Props> = ({
  count
}) => Array.from(Array(count).keys()).map((index) => (
  <li key={`EventCardSkeleton-${index}`}>
    <EventCardSkeleton />
  </li>
));

export { EventCardSkeletons };
