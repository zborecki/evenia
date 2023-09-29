import { FC } from 'react';

import { LogoProps } from '#components/logo/props';
import { ROUTE } from '#constants/routes';
import { Logomark } from '#svg/logomark';
import { Logotype } from '#svg/logotype';

import '#components/logo/styles.scss';

const Logo: FC<LogoProps> = ({ ariaLabel }) => (
  <a
    aria-label={ariaLabel}
    className="evenia-logo"
    href={ROUTE.HOME}
  >
    <Logomark className="evenia-logo__logomark" />
    <Logotype className="evenia-logo__logotype" />
  </a>
);

export { Logo };
