import { GET_EVENTS } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsByIdRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const getEventCards = async ({
  categoryId = '',
  offset = 4
}: FetchEventsByIdRequest) => (
  await apolloClient().query<EventCardsResponse>({
    query: GET_EVENTS,
    variables: {
      categoryId,
      offset
    }
  })
).data;
