import Image from 'next/image';
import { FC } from 'react';

import { EventCard as Props } from '#props/common';
import '#components/event-card/styles.scss';

const EventCard: FC<Props> = ({
  author, date, title, image
}) => (
  <div className="evenia-event-card">
    <Image
      alt={image.fileName}
      className="evenia-event-card__image"
      height={174}
      loading="lazy"
      src={image.url}
      width={294}
    />
    <div className="evenia-event-card__content">
      <p>{ date }</p>
      <h3>{ title }</h3>
      <p>{ author.organizerName }</p>
    </div>
  </div>
);

export { EventCard };
