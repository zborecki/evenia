import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { ROUTE } from '#constants/routes';
import { useAuthServer } from '#hooks/useAuthServer';
import Layout from '#layouts/base-layout';

const ProtectedLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { organizer } = await useAuthServer();

  if (!organizer) {
    redirect(ROUTE.HOME);
  }

  return (
    <Layout>
      { children }
    </Layout>
  );
};

export default ProtectedLayout;
