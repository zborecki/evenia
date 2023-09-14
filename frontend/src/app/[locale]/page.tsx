import { useTranslations } from 'next-intl';

import Layout from '#layouts/base-layout';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <Layout>
      <main>
        <h1>{ t('title') }</h1>
      </main>
    </Layout>
  );
};

export default Home;
