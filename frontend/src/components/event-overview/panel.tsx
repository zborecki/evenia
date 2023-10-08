import { FC } from 'react';

import { EventOverviewPanelProps } from './props';

import { Author } from '#components/event-overview/author';
import { Price } from '#components/event-overview/price';

const Panel: FC<EventOverviewPanelProps> = ({
  author, date, price, title
}) => (
  <div className="evenia-event-overview__panel">
    <time className="evenia-event-overview__date" dateTime={date}>{ date }</time>
    <h2 className="evenia-event-overview__title">{ title }</h2>
    <div className="evenia-event-overview__details">
      <Price price={price} />
      <Author author={author} />
    </div>
  </div>
);

export { Panel };
