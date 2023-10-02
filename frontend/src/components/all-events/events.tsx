'use client';

import { useSelector } from 'react-redux';

import { InteractiveEvents } from '#components/interactive-events';
import { usePaginatedEvents } from '#hooks/usePaginatedEvents';
import { paginatedEventsSelector } from '#slices/paginated-events';

const Events = () => {
  const { categoryName } = useSelector(paginatedEventsSelector);
  const { initializeEvents } = usePaginatedEvents({ categoryName, offset: 8 });

  return <InteractiveEvents initializeEvents={initializeEvents} />;
};

export { Events };
