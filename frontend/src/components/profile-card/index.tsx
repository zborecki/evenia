import Image from 'next/image';
import { FC } from 'react';

import { Options } from '#components/profile-card/options';
import { ProfileCardProps } from '#components/profile-card/props';

import '#components/profile-card/styles.scss';

const ProfileCard: FC<ProfileCardProps> = ({ alt, avatar, fullName }) => (
  <div className="evenia-profile-card">
    <Image
      alt={alt}
      className="evenia-profile-card__avatar"
      height={59}
      src={avatar ?? '/avatar.webp'}
      width={59}
    />
    <p className="evenia-profile-card__full-name">{ fullName }</p>
    <Options />
  </div>
);

export { ProfileCard };
