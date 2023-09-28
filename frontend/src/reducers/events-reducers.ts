import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_EVENTS } from '#/services/events-service';
import { apolloClient } from '#libraries/apollo-client';
import { FetchEventsRequest } from '#props/requests';
import { EventCardsResponse } from '#props/services';

export const FETCH_EVENTS = createAsyncThunk(
  'events/FETCH_EVENTS',
  async ({ categoryName, offset }: FetchEventsRequest) => {
    const { data } = await apolloClient().query<EventCardsResponse>({
      query: GET_EVENTS,
      variables: {
        categoryName,
        offset
      }
    });

    return data;
  }
);

export const UPDATE_EVENTS = createAsyncThunk(
  'events/UPDATE_EVENTS',
  async ({ categoryName, offset }: FetchEventsRequest) => {
    const { data } = await apolloClient().query<EventCardsResponse>({
      query: GET_EVENTS,
      variables: {
        categoryName,
        offset
      }
    });

    return data;
  }
);
