import { FC } from 'react';

import { LazyImage } from '#components/lazy-image';
import { EventCard as Props } from '#props/common';
import '#components/event-card/styles.scss';

const EventCard: FC<Props> = ({
  author, date, title, image
}) => (
  <div className="evenia-event-card">
    <LazyImage
      alt={image.fileName}
      height={200}
      src={image.url}
      width={200}
    />
    <div className="evenia-event-card__content">
      <p>{ date }</p>
      <h3>{ title }</h3>
      <p>{ author.organizerName }</p>
    </div>
  </div>
);

export { EventCard };
