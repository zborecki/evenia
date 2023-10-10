import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Button } from '#components/button';
import { Loader } from '#components/loader';
import { TicketsInteractiveProps } from '#components/tickets/props';

const Interactive: FC<TicketsInteractiveProps> = ({
  fetchOtherTickets, hasNextPage, isLoading
}) => {
  const t = useTranslations('Common');

  return hasNextPage && (
    <div className="evenia-tickets__interactive">
      {
        isLoading ? <Loader /> : (
          <Button
            as="button"
            hidden={!hasNextPage}
            type="button"
            onClick={fetchOtherTickets}
          >
            { t('see_more') }
          </Button>
        )
      }
    </div>
  );
};

export { Interactive };
