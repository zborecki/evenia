import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Auth } from '#components/auth';
import { SignInForm } from '#components/sign-in-form';
import Layout from '#layouts/base-layout';

export const metadata: Metadata = {
  title: 'Evenia - Log in'
};

const Page = () => {
  const t = useTranslations('Sign_in');

  return (
    <Layout>
      <Auth description={t('description')} title={t('title')}>
        <SignInForm />
      </Auth>
    </Layout>
  );
};

export default Page;
