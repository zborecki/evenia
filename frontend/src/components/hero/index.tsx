import { useTranslations } from 'next-intl';

import { Illustration } from '#components/hero/illustration';
import { Panel } from '#components/hero/panel';
import { Wrapper } from '#components/hero/wrapper';
import '#components/hero/styles.scss';

const Hero = () => {
  const button = useTranslations('Button');
  const t = useTranslations('Hero');

  return (
    <Wrapper>
      <Panel
        button={button('explore_now')}
        description={t('description')}
        title={t('title')}
      />
      <Illustration
        alt={t('alt')}
        height={606}
        src="/hero.webp"
        width={554}
      />
    </Wrapper>
  );
};

export { Hero };
