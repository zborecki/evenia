'use client';

import { FC } from 'react';

import { TicketCard } from '#components/ticket-card';
import { Grid } from '#components/tickets/grid';
import { Interactive } from '#components/tickets/interactive';
import { TicketsItemsProps } from '#components/tickets/props';
import { usePaginatedTickets } from '#hooks/usePaginatedTickets';

const Items: FC<TicketsItemsProps> = ({ defaultOffset, initialTickets, userId }) => {
  const {
    fetchOtherTickets, hasNextPage, isLoading, tickets
  } = usePaginatedTickets({
    defaultOffset, initialTickets, userId
  });

  return (
    <>
      <Grid>
        {
          tickets.map(({ event, isPaid }, index) => (
            <li key={`Ticket-${event.title}-${index}`}>
              <TicketCard event={event} isPaid={isPaid} />
            </li>
          ))
        }
      </Grid>
      {
        initialTickets.length === defaultOffset && (
          <Interactive
            fetchOtherTickets={fetchOtherTickets}
            hasNextPage={hasNextPage}
            isLoading={isLoading}
          />
        )
      }
    </>
  );
};

export { Items };
