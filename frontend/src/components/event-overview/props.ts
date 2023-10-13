export interface EventOverviewAuthorProps {
  author: string;
}

export interface EventOverviewPanelProps
  extends EventOverviewAuthorProps, EventOverviewPriceProps {
  date: string;
  title: string;
}

export interface EventOverviewProps
  extends EventOverviewPanelProps {
  image: {
    alt: string;
    src: string;
  };
  id: string;
}

export interface EventOverviewPriceProps {
  price: number;
}
