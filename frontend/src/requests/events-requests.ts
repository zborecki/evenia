import { GET_EVENTS } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const fetchEventCards = async ({
  categoryName = '',
  offset = 4
}: FetchEventsRequest) => (
  await apolloClient().query<EventCardsResponse>({
    query: GET_EVENTS,
    variables: {
      categoryName,
      offset
    }
  })
).data;
