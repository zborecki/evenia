import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TicketPreviewSummaryProps } from '#components/ticket-preview/props';
import { getFees } from '#constants/checkout';

const Summary: FC<TicketPreviewSummaryProps> = ({ price }) => {
  const event = useTranslations('Event');
  const t = useTranslations('Common');

  return (
    <div className="evenia-ticket-preview__summary">
      <p className="evenia-ticket-preview__total">
        { t('total') }
      </p>
      <p className="evenia-ticket-preview__price">
        {
        event('price', {
          value: (price + Number(getFees(price, 0.23))).toFixed(2) ?? '0'
        })
      }
      </p>
    </div>
  );
};

export { Summary };
