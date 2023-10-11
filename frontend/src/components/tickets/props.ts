import { ITicket } from '#types/common';

export interface TicketsInteractiveProps {
  fetchOtherTickets: () => void;
  hasNextPage: boolean;
  isLoading: boolean;
}

export interface TicketsItemsProps {
  defaultOffset: number;
  initialTickets: ITicket[];
  userId: string;
}
