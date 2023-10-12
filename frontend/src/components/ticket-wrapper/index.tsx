import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TicketWrapperProps } from './props';

import { Button } from '#components/button';
import { TicketPreview } from '#components/ticket-preview';
import { ROUTE } from '#constants/routes';
import '#theme/pages/ticket.scss';

const TicketWrapper: FC<TicketWrapperProps> = ({ slug }) => {
  const t = useTranslations('Button');

  return (
    <main className="evenia-ticket">
      <div className="evenia-ticket__container">
        <Button
          as="a"
          className="evenia-ticket__button"
          href={ROUTE.MY_TICKETS}
          variant="outlined"
        >
          { t('back_to_tickets') }
        </Button>
        <TicketPreview slug={slug} />
      </div>
    </main>
  );
};

export { TicketWrapper };
