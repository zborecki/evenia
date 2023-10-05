import { cookies } from 'next/headers';
import { useTranslations } from 'next-intl';

import { Interactive } from '#components/header/interactive';
import { Logo } from '#components/logo';
import { Tooltip } from '#components/tooltip';
import { COOKIE } from '#constants/keys';

const Content = () => {
  const common = useTranslations('Common');
  const authToken = cookies().get(COOKIE.AUTH)?.value;

  return (
    <>
      <Tooltip title={common('return_home')}>
        <Logo />
      </Tooltip>
      <Interactive authToken={authToken} />
    </>
  );
};

export { Content };
