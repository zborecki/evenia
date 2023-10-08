import { notFound } from 'next/navigation';
import { FC } from 'react';

import { EventOverview } from '#components/event-overview';
import { mergeSlug } from '#constants/routes';
import Layout from '#layouts/base-layout';
import { getEventBySlug } from '#requests/event';
import { SlugProps } from '#types/props';

const Page: FC<SlugProps> = async ({ params: { slug } }) => {
  const eventSlug = mergeSlug(slug as string[]);
  const { event } = await getEventBySlug(eventSlug);

  if (!event) {
    notFound();
  }

  return (
    <Layout>
      <main>
        <EventOverview
          author={event.author.organizerName}
          date={event.date}
          image={event.image.url}
          price={event.price}
          title={event.title}
        />
      </main>
    </Layout>
  );
};

export default Page;
