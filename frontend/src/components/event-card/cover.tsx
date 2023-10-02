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
    <Image
      alt={alt}
      blurDataURL={blurDataURL}
      className="evenia-event-card__image"
      height={174}
      loading="lazy"
      placeholder="blur"
      src={src}
      width={294}
    />
  </Link>
);

export { Cover };
