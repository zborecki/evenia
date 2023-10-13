import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { TicketCardCoverProps } from '#components/ticket-card/props';

const Cover: FC<TicketCardCoverProps> = ({
  alt, slug, src
}) => (
  <Link
    className="evenia-ticket-card__link"
    href={slug}
    prefetch={false}
  >
    <div className="evenia-ticket-card__image-container">
      <Image
        alt={alt}
        className="evenia-ticket-card__image"
        loading="lazy"
        src={src}
        fill
      />
    </div>
  </Link>
);

export { Cover };
