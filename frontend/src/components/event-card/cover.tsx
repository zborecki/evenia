import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { EventCardCoverProps } from '#components/event-card/props';

const Cover: FC<EventCardCoverProps> = ({
  alt, blurDataURL, slug, src
}) => (
  <Link
    className="evenia-event-card__link"
    href={slug}
    prefetch={false}
  >
    <div className="evenia-event-card__image-container">
      <Image
        alt={alt}
        blurDataURL={blurDataURL}
        className="evenia-event-card__image"
        loading="lazy"
        placeholder="blur"
        src={src}
        fill
      />
    </div>
  </Link>
);

export { Cover };
