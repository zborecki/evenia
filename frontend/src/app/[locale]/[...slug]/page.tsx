import { notFound } from 'next/navigation';
import { FC } from 'react';

import { EventDetails } from '#components/event-details';
import { EventOverview } from '#components/event-overview';
import { RelatedEvents } from '#components/related-events';
import { mergeSlug } from '#constants/routes';
import Layout from '#layouts/base-layout';
import { getEventBySlug } from '#requests/event';
import { getPaginatedEventsCount } from '#requests/paginated-events';
import { SlugProps } from '#types/props';

const Page: FC<SlugProps> = async ({ params: { slug } }) => {
  const eventSlug = mergeSlug(slug as string[]);
  const { event } = await getEventBySlug(eventSlug);

  if (!event) {
    notFound();
  }

  const { pageInfo } = await getPaginatedEventsCount({
    categoryName: event.category.name
  });

  return (
    <Layout>
      <main>
        <EventOverview
          author={event.author.organizerName}
          date={event.date}
          image={{
            alt: event.image.fileName,
            src: event.image.url
          }}
          price={event.price}
          title={event.title}
        />
        <EventDetails
          date={event.date}
          description={event.description}
          details={event.details}
          location={event.location}
        />
        { pageInfo.count > 0 && <RelatedEvents categoryName={event.category.name} /> }
      </main>
    </Layout>
  );
};

export default Page;
