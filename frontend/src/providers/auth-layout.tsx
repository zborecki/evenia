import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';

import { ROUTE } from '#constants/routes';
import { useAuthServer } from '#hooks/useAuthServer';
import Layout from '#layouts/base-layout';

const AuthLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { organizer } = await useAuthServer();
  const route = headers().get('x-invoke-path')?.slice(3);

  if (organizer && (route === ROUTE.SIGN_IN || ROUTE.SIGN_UP)) {
    redirect(ROUTE.HOME);
  }

  return (
    <Layout>
      { children }
    </Layout>
  );
};

export default AuthLayout;
