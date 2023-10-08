import { graphQLClient } from '#libraries/apollo-client';
import { GET_PAGINATED_EVENTS_COUNT_QUERY } from '#queries/events';
import { getPaginatedEventsCountRequest } from '#types/requests';
import { GetPaginatedEventsCountResponse } from '#types/responses';

export const getPaginatedEventsCount = async ({
  categoryName, first = 4
}: getPaginatedEventsCountRequest) => {
  const { eventsConnection } = (await graphQLClient().query<GetPaginatedEventsCountResponse>({
    query: GET_PAGINATED_EVENTS_COUNT_QUERY,
    variables: {
      categoryName,
      first
    }
  })
  ).data;

  return {
    pageInfo: {
      count: eventsConnection.pageInfo.pageSize
    }
  };
};
