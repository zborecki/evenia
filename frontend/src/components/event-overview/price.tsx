import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EventOverviewPriceProps } from './props';

const Price: FC<EventOverviewPriceProps> = ({ price }) => {
  const t = useTranslations('Event');

  return (
    <p className="evenia-event-overview__price">
      {
        price
          ? t('price', { value: price })
          : (
            <span className="evenia-event-overview__price--free">
              { t('free') }
            </span>
          )
      }
    </p>
  );
};

export { Price };
