import { FC } from 'react';

import { ROUTE } from '#constants/routes';
import Logomark from '#svg/logomark';
import Logotype from '#svg/logotype';
import '#components/logo/styles.scss';

interface Props {
  ariaLabel?: string;
}

const Logo: FC<Props> = ({ ariaLabel }) => (
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
