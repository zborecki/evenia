import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  [key in 'alt' | 'blurDataURL' | 'slug' | 'src']: string;
};

const Cover: FC<Props> = ({
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
