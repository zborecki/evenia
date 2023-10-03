import { AllEvents } from '#components/all-events';
import { Partners } from '#components/partners';
import Layout from '#layouts/base-layout';

const Page = () => (
  <Layout>
    <main>
      <Partners />
      <AllEvents />
    </main>
  </Layout>
);

export default Page;
