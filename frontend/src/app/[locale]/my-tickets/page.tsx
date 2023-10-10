import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Tickets } from '#components/tickets';
import { Title } from '#components/title';
import ProtectedLayout from '#layouts/protected-layout';

export const metadata: Metadata = {
  title: 'Evenia - My Tickets'
};

const Page = () => {
  const t = useTranslations('My_tickets');

  return (
    <ProtectedLayout>
      <Title id="my-tickets-page">{ t('title') }</Title>
      <Tickets />
    </ProtectedLayout>
  );
};

export default Page;
