import { FC } from 'react';

import { EventOverviewProps } from '#components/event-overview/props';
import '#components/event-overview/styles.scss';

const EventOverview: FC<EventOverviewProps> = ({
  author, date, image, price, title
}) => (
  <section className="evenia-overview">
    { title }
  </section>
);

export { EventOverview };
