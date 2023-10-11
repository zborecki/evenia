import { FC } from 'react';

import { Content } from '#components/ticket-card/content';
import { Cover } from '#components/ticket-card/cover';
import { ROUTE } from '#constants/routes';
import { ITicket } from '#types/common';
import '#components/ticket-card/styles.scss';

const TicketCard: FC<ITicket> = ({
  isPaid,
  event: {
    author,
    date,
    id,
    image,
    title
  }
}) => {
  const slug = `${ROUTE.TICKET}/${id}`;

  return (
    <div className="evenia-ticket-card">
      <Cover
        alt={image.fileName}
        slug={slug}
        src={image.url}
      />
      <Content
        date={date}
        isPaid={isPaid}
        organizerName={author.organizerName}
        slug={slug}
        title={title}
      />
    </div>
  );
};

export { TicketCard };
