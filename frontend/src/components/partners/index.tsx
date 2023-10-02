import { useTranslations } from 'next-intl';

import { Section } from '#components/section';
import '#components/partners/styles.scss';

const Partners = () => {
  const t = useTranslations('Partners');

  return (
    <Section className="evenia-partners" title={t('title')}>
      Partners
    </Section>
  );
};

export { Partners };
