import Image from 'next/image';
import { FC } from 'react';

import { TicketPreviewCoverProps } from '#components/ticket-preview/props';

const Cover: FC<TicketPreviewCoverProps> = ({ image }) => (
  <figure className="evenia-ticket-preview__cover">
    <Image
      alt={image.fileName}
      className="evenia-ticket-preview__image"
      src={image.url}
      fill
    />
  </figure>
);

export { Cover };
