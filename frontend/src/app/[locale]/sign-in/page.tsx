import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { AuthWrapper } from '#components/auth-wrapper';
import { SignInForm } from '#components/sign-in-form';
import AuthLayout from '#layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Evenia - Log in'
};

const Page = () => {
  const t = useTranslations('Sign_in');

  return (
    <AuthLayout>
      <AuthWrapper description={t('description')} title={t('title')}>
        <SignInForm />
      </AuthWrapper>
    </AuthLayout>
  );
};

export default Page;
