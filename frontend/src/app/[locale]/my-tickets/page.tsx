import { Metadata } from 'next';

import ProtectedLayout from '#layouts/protected-layout';

export const metadata: Metadata = {
  title: 'Evenia - My Tickets'
};

const Page = () => (
  <ProtectedLayout>
    My Tickets - Protected route
  </ProtectedLayout>
);

export default Page;
