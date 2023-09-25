import { GET_EVENTS_BY_ID } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsByIdRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const getEventCards = async ({
  categoryId = '',
  offset = 12
}: FetchEventsByIdRequest) => (
  await apolloClient().query<EventCardsResponse>({
    query: GET_EVENTS_BY_ID,
    variables: {
      categoryId,
      offset
    }
  })
).data;
