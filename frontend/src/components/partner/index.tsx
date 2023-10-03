import { FC } from 'react';

import { Logo } from '#components/partner/logo';
import { PartnerProps } from '#components/partner/props';
import '#components/partner/styles.scss';

const Partner: FC<PartnerProps> = ({ logo, name, url }) => (
  <a
    aria-label={name}
    className="evenia-partner"
    href={url}
    rel="noreferrer"
    target="_blank"
  >
    <div className="evenia-partner__container">
      <Logo logo={logo} name={name} />
    </div>
  </a>
);

export { Partner };
