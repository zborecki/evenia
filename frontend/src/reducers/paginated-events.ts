import { createAsyncThunk } from '@reduxjs/toolkit';

import { graphQLClient } from '#libraries/apollo-client';
import { GET_PAGINATED_EVENTS_QUERY } from '#queries/events';
import { GetPaginatedEventsRequest } from '#types/requests';
import { GetPaginatedEventsResponse } from '#types/responses';

export const GET_PAGINATED_EVENTS = createAsyncThunk(
  'paginatedEvents/GET_PAGINATED_EVENTS',
  async ({ categoryName, first, skip }: GetPaginatedEventsRequest) => {
    try {
      const {
        data: {
          eventsConnection: {
            edges, pageInfo
          }
        }
      } = await graphQLClient().query<GetPaginatedEventsResponse>({
        query: GET_PAGINATED_EVENTS_QUERY,
        variables: {
          first,
          skip,
          categoryName
        }
      });

      return {
        events: edges.map((edge) => edge.node),
        hasNextPage: pageInfo.hasNextPage
      };
    } catch {
      return {
        events: [],
        hasNextPage: false
      };
    }
  }
);
