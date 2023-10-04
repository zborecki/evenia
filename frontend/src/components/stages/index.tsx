import { useTranslations } from 'next-intl';

import { Section } from '#components/section';
import { StageItem } from '#components/stage-item';
import { STAGE } from '#constants/stages';
import '#components/stages/styles.scss';

const Stages = () => {
  const t = useTranslations('Stages');
  const stage = useTranslations('Stages.stages');

  return (
    <Section
      className="evenia-stages"
      title={t('title')}
      pattern
    >
      <ul className="evenia-stages__list">
        {
          [STAGE.CREATE, STAGE.SHARE, STAGE.EARN].map((key) => (
            <StageItem
              description={stage(`${key}.description`)}
              id={key}
              key={`Stages-StageItem-${key}`}
              title={stage(`${key}.title`)}
            />
          ))
        }
      </ul>
    </Section>
  );
};

export { Stages };
