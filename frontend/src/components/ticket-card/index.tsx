import { FC } from 'react';

import { Content } from '#components/ticket-card/content';
import { Cover } from '#components/ticket-card/cover';
import { ITicket } from '#types/common';
import '#components/ticket-card/styles.scss';

const TicketCard: FC<ITicket> = ({
  isPaid,
  event: {
    author,
    date,
    image,
    title
  }
}) => (
  <div className="evenia-ticket-card">
    <Cover
      alt={image.fileName}
      slug="/"
      src={image.url}
    />
    <Content
      date={date}
      isPaid={isPaid}
      organizerName={author.organizerName}
      title={title}
    />
  </div>
);

export { TicketCard };
