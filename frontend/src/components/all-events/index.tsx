import { useTranslations } from 'next-intl';

import { Categories } from '#components/all-events/categories';
import { Section } from '#components/section';

const AllEvents = () => {
  const t = useTranslations('All_events');

  return (
    <Section title={t('title')}>
      <Categories />
    </Section>
  );
};

export { AllEvents };
