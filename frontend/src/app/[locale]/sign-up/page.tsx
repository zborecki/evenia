import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Auth } from '#components/auth';
import { SignUpForm } from '#components/sign-up-form';
import Layout from '#layouts/base-layout';

export const metadata: Metadata = {
  title: 'Evenia - Sign up'
};

const Page = () => {
  const t = useTranslations('Sign_up');

  return (
    <Layout>
      <Auth description={t('description')} title={t('title')}>
        <SignUpForm />
      </Auth>
    </Layout>
  );
};

export default Page;
