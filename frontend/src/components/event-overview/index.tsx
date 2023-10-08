import Image from 'next/image';
import { FC } from 'react';

import { Panel } from '#components/event-overview/panel';
import { EventOverviewProps } from '#components/event-overview/props';

import '#components/event-overview/styles.scss';

const EventOverview: FC<EventOverviewProps> = ({
  author, date, image, price, title
}) => (
  <section className="evenia-event-overview">
    <div className="evenia-event-overview__container">
      <Image
        alt={image.alt}
        height={663}
        src={image.src}
        width={742}
      />
      <Panel
        author={author}
        date={date}
        price={price}
        title={title}
      />
    </div>
  </section>
);

export { EventOverview };
