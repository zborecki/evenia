import { InteractiveEvents } from '#components/interactive-events';
import { getEventCards } from '#requests/events-requests';

const OFFSET = 4;
const Events = async () => {
  const { events } = await getEventCards({ categoryId: '', offset: OFFSET });

  return (
    <InteractiveEvents initialEvents={events} offset={OFFSET} />
  );
};

export { Events };
