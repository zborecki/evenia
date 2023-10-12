import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TicketPreviewHeaderProps } from '#components/ticket-preview/props';

const Header: FC<TicketPreviewHeaderProps> = ({
  organizerName, title
}) => {
  const t = useTranslations('Event');

  return (
    <>
      <h2 className="evenia-ticket-preview__title">
        { title }
      </h2>
      <p className="evenia-ticket-preview__author">
        { `${t('created_by')} ${organizerName}` }
      </p>
    </>
  );
};

export { Header };
