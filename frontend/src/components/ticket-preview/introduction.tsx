import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Badge } from '#components/badge';
import { TicketPreviewIntroductionProps } from '#components/ticket-preview/props';

const Introduction: FC<TicketPreviewIntroductionProps> = ({ isPaid }) => {
  const t = useTranslations('Ticket_preview');
  const ticket = useTranslations('Ticket_card');

  return (
    <div className="evenia-ticket-preview__introduction">
      <p className="evenia-ticket-preview__destination">{ t('destination') }</p>
      <Badge variant={isPaid ? 'completed' : 'pending'}>
        { ticket(isPaid ? 'paid' : 'unpaid') }
      </Badge>
    </div>
  );
};

export { Introduction };
