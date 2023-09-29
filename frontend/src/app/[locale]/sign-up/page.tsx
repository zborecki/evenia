import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { AuthWrapper } from '#components/auth-wrapper';
import { SignUpForm } from '#components/sign-up-form';
import AuthLayout from '#layouts/auth-layout';

export const metadata: Metadata = {
  title: 'Evenia - Sign up'
};

const Page = () => {
  const t = useTranslations('Sign_up');

  return (
    <AuthLayout>
      <AuthWrapper description={t('description')} title={t('title')}>
        <SignUpForm />
      </AuthWrapper>
    </AuthLayout>
  );
};

export default Page;
