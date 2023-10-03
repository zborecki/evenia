import Image from 'next/image';
import { FC } from 'react';

import { PartnerLogoProps } from './props';

const Logo: FC<PartnerLogoProps> = ({ logo, name }) => (
  <div className="evenia-partner__image">
    <Image
      alt={name}
      className="evenia-partner__source"
      height={60}
      src={logo}
      width={175}
    />
  </div>
);

export { Logo };
