import { useCallback, useState } from 'react';

import { TicketsItemsProps } from '#components/tickets/props';
import { getTickets } from '#requests/tickets';
import { ITicket } from '#types/common';

export const usePaginatedTickets = ({
  defaultOffset,
  initialTickets,
  userId
}: TicketsItemsProps) => {
  const [tickets, setTickets] = useState<ITicket[]>(initialTickets);
  const [offset, setOffset] = useState<number>(defaultOffset);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const fetchOtherTickets = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getTickets(userId, offset, offset);
      setTickets((previousTickets) => [...previousTickets, ...response.tickets]);
      setOffset((previousOffset) => previousOffset + defaultOffset);
      setHasNextPage(response.tickets.length === defaultOffset);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [offset, tickets]);

  return {
    fetchOtherTickets,
    hasNextPage,
    isLoading,
    tickets
  };
};
