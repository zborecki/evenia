import { useTranslations } from 'next-intl';

import { AllEvents } from '#components/all-events';
import Layout from '#layouts/base-layout';

const Page = () => {
  const t = useTranslations('Home');

  return (
    <Layout>
      <main>
        <AllEvents />
      </main>
    </Layout>
  );
};

export default Page;
