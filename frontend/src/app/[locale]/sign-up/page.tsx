import { useTranslations } from 'next-intl';

import { Auth } from '#components/auth';
import Layout from '#layouts/base-layout';

const SignUp = () => {
  const t = useTranslations('Sign_up');

  return (
    <Layout>
      <Auth description={t('description')} title={t('title')}>
        Content
      </Auth>
    </Layout>
  );
};

export default SignUp;
