import { cookies } from 'next/headers';
import { FC } from 'react';

import { Content } from '#components/ticket-preview/content';
import { Cover } from '#components/ticket-preview/cover';
import { TicketWrapperProps } from '#components/ticket-wrapper/props';
import { COOKIE } from '#constants/keys';
import { getTicketPreview } from '#requests/tickets';
import '#components/ticket-preview/styles.scss';

const TicketPreview: FC<TicketWrapperProps> = async ({ slug }) => {
  const authToken = cookies().get(COOKIE.AUTH);
  const { email, ticket } = await getTicketPreview(authToken?.value as string, slug);

  if (!ticket) {
    console.log('Err');
  }

  return (
    <div className="evenia-ticket-preview">
      <Cover image={ticket.image} />
      <Content
        date={ticket.date}
        email={email}
        isPaid={ticket.isPaid}
        organizerName={ticket.author.organizerName}
        price={ticket.price}
        title={ticket.title}
      />
    </div>
  );
};

export { TicketPreview };
