import { useTranslations } from 'next-intl';

import { Logo } from '#components/logo';
import { Tooltip } from '#components/tooltip';

const Content = () => {
  const t = useTranslations('Common');

  return (
    <>
      <Tooltip title={t('return_home')}>
        <Logo />
      </Tooltip>
      <div />
    </>
  );
};

export { Content };
