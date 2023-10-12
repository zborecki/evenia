import { IImage } from '#types/common';

export interface TicketCardContentProps {
  date: string;
  isPaid: boolean;
  organizerName: string;
  slug: string;
  title: string;
}

export interface TicketCardCoverProps extends IImage {
  slug: string;
}
