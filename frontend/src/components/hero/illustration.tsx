import Image from 'next/image';
import { FC } from 'react';

import { HeroIllustrationProps } from '#components/hero/props';

const Illustration: FC<HeroIllustrationProps> = ({
  alt, height, src, width
}) => (
  <div className="evenia-hero__image">
    <div className="evenia-hero__circle" />
    <Image
      alt={alt}
      className="evenia-hero__source"
      height={height}
      src={src}
      width={width}
    />
  </div>
);

export { Illustration };
