export interface TicketPreviewContentProps
  extends TicketPreviewHeaderProps, TicketPreviewIntroductionProps, TicketPreviewSummaryProps {
  email: string;
  date: string;
}

export interface TicketPreviewCoverProps {
  image: {
    fileName: string;
    url: string;
  }
}

export interface TicketPreviewDetailProps {
  children: string;
  title: string;
}

export interface TicketPreviewHeaderProps {
  organizerName: string;
  title: string;
}

export interface TicketPreviewIntroductionProps {
  isPaid: boolean;
}

export interface TicketPreviewSummaryProps {
  price: number;
}
