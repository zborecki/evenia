import { useTranslations } from 'next-intl';

import { Section } from '#components/section';

const AllEvents = () => {
  const t = useTranslations('All_events');

  return (
    <Section title={t('title')}>
      All events
    </Section>
  );
};

export { AllEvents };
