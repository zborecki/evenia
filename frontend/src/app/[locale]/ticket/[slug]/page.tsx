import { Metadata } from 'next';
import { FC } from 'react';

import { TicketWrapper } from '#components/ticket-wrapper';
import ProtectedLayout from '#layouts/protected-layout';
import { SlugProps } from '#types/props';

export const metadata: Metadata = {
  title: 'Evenia - Ticket'
};

const Page: FC<SlugProps> = ({ params: { slug } }) => (
  <ProtectedLayout>
    <TicketWrapper slug={slug as string} />
  </ProtectedLayout>
);

export default Page;
