import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { EventCard } from '#components/event-card';
import { Grid } from '#components/interactive-events/grid';
import { InteractiveEventsProps } from '#components/interactive-events/props';
import { paginatedEventsSelector } from '#slices/paginated-events';

const Cards: FC<InteractiveEventsProps> = ({ initializeEvents }) => {
  const { categoryName, events } = useSelector(paginatedEventsSelector);

  useEffect(() => {
    initializeEvents();
  }, [categoryName]);

  return (
    <Grid>
      {
        events.map((props) => (
          <li key={`InteractiveEvents-${props.title}-${props.author}`}>
            <EventCard {...props} />
          </li>
        ))
      }
    </Grid>
  );
};

export { Cards };
