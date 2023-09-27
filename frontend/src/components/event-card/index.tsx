import { FC } from 'react';

import { Content } from '#components/event-card/content';
import { Cover } from '#components/event-card/cover';
import { EventCard as Props } from '#props/common';

import '#components/event-card/styles.scss';

const EventCard: FC<Props> = ({
  author: { organizerName },
  date,
  title,
  image: { blurDataURL, fileName, url },
  slug
}) => (
  <div className="evenia-event-card">
    <Cover
      alt={fileName}
      blurDataURL={blurDataURL}
      slug={slug}
      src={url}
    />
    <Content
      author={organizerName}
      date={date}
      slug={slug}
      title={title}
    />
  </div>
);

export { EventCard };
