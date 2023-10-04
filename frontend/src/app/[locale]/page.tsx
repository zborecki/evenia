import { AllEvents } from '#components/all-events';
import { Partners } from '#components/partners';
import { Stages } from '#components/stages';
import Layout from '#layouts/base-layout';

const Page = () => (
  <Layout>
    <main>
      <Stages />
      <Partners />
      <AllEvents />
    </main>
  </Layout>
);

export default Page;
