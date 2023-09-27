import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_EVENTS } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsByIdRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const FETCH_EVENTS = createAsyncThunk(
  'events/FETCH_EVENTS',
  async ({ categoryId = '', offset = 4 }: FetchEventsByIdRequest) => {
    const { data } = await apolloClient().query<EventCardsResponse>({
      query: GET_EVENTS,
      variables: {
        categoryId,
        offset
      }
    });

    return data;
  }
);
