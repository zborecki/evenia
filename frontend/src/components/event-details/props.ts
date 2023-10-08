export interface EventDetailsDateProps {
  date: string;
}

export interface EventDetailsInformationProps {
  description: string;
  details: string;
}

export interface EventDetailsLocationProps {
  location: string;
}

export type EventDetailsProps =
  EventDetailsDateProps
  & EventDetailsInformationProps
  & EventDetailsLocationProps;
