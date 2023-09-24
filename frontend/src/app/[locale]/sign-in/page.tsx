import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Auth } from '#components/auth';
import { SignInForm } from '#components/sign-in-form';
import AuthLayout from '#layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Evenia - Log in'
};

const Page = () => {
  const t = useTranslations('Sign_in');

  return (
    <AuthLayout>
      <Auth description={t('description')} title={t('title')}>
        <SignInForm />
      </Auth>
    </AuthLayout>
  );
};

export default Page;
