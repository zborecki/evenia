import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Badge } from '#components/badge';
import { TicketCardContentProps } from '#components/ticket-card/props';

const Content: FC<TicketCardContentProps> = ({
  date,
  isPaid,
  organizerName,
  slug,
  title
}) => {
  const t = useTranslations('Ticket_card');

  return (
    <div className="evenia-ticket-card__content">
      <Badge variant={isPaid ? 'completed' : 'pending'}>
        {
          t(isPaid ? 'paid' : 'unpaid')
        }
      </Badge>
      <time className="evenia-ticket-card__date" dateTime={date}>{ date }</time>
      <Link href={slug}>
        <h2 className="evenia-ticket-card__title">{ title }</h2>
      </Link>
      <p className="evenia-ticket-card__author">{ organizerName }</p>
    </div>
  );
};

export { Content };
