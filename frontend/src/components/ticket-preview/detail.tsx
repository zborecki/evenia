import { FC } from 'react';

import { TicketPreviewDetailProps } from '#components/ticket-preview/props';

const Detail: FC<TicketPreviewDetailProps> = ({ children, title }) => (
  <div className="evenia-detail">
    <h2 className="evenia-detail__title">{ title }</h2>
    <p className="evenia-detail__content">{ children }</p>
  </div>
);

export { Detail };
