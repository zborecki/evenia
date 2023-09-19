import { useTranslations } from 'next-intl';

import { Interactive } from '#components/header/interactive';
import { Logo } from '#components/logo';
import { Tooltip } from '#components/tooltip';

const Content = () => {
  const common = useTranslations('Common');

  return (
    <>
      <Tooltip title={common('return_home')}>
        <Logo />
      </Tooltip>
      <Interactive />
    </>
  );
};

export { Content };
