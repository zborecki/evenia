import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_EVENTS_BY_ID } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsByIdRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const FETCH_EVENTS_BY_ID = createAsyncThunk(
  'events/FETCH_EVENTS_BY_ID',
  async ({ categoryId = '', offset = 12 }: FetchEventsByIdRequest) => {
    const { data } = await apolloClient().query<EventCardsResponse>({
      query: GET_EVENTS_BY_ID,
      variables: {
        categoryId,
        offset
      }
    });

    return data;
  }
);
