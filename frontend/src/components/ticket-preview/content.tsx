import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Button } from '#components/button';
import { Divider } from '#components/divider';
import { Detail } from '#components/ticket-preview/detail';
import { Header } from '#components/ticket-preview/header';
import { Introduction } from '#components/ticket-preview/introduction';
import { TicketPreviewContentProps } from '#components/ticket-preview/props';
import { Summary } from '#components/ticket-preview/summary';

const Content: FC<TicketPreviewContentProps> = ({
  date,
  email,
  isPaid,
  organizerName,
  price,
  title
}) => {
  const button = useTranslations('Button');
  const t = useTranslations('Common');

  return (
    <div className="evenia-ticket-preview__content">
      <Introduction isPaid={isPaid} />
      <Header organizerName={organizerName} title={title} />
      <div className="evenia-ticket-preview__details">
        <Detail title={t('subtotal')}>{ email }</Detail>
        <Detail title={t('date')}>{ date }</Detail>
      </div>
      <Divider className="evenia-ticket-preview__divider" />
      <Summary price={price} />
      <Button
        as="button"
        disabled={isPaid}
        type="button"
      >
        { isPaid ? button('get_link') : button('pay_now') }
      </Button>
    </div>
  );
};

export { Content };
