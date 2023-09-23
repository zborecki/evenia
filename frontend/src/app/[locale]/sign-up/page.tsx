import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Auth } from '#components/auth';
import { SignUpForm } from '#components/sign-up-form';
import AuthLayout from '#providers/auth-layout';

export const metadata: Metadata = {
  title: 'Evenia - Sign up'
};

const Page = () => {
  const t = useTranslations('Sign_up');

  return (
    <AuthLayout>
      <Auth description={t('description')} title={t('title')}>
        <SignUpForm />
      </Auth>
    </AuthLayout>
  );
};

export default Page;
