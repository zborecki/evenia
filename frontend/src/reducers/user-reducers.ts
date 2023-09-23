import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_DETAILS_ORGANIZER } from '#/services/organizer-service';
import { apolloClient } from '#libraries/apollo-client';
import { UserDetailsOrganizerResponse } from '#props/services';

export const FETCH_USER_DETAILS_BY_ID = createAsyncThunk(
  'user/FETCH_USER_DETAILS_BY_ID',
  async (id: string) => {
    const client = apolloClient();
    const { data } = await client.query<UserDetailsOrganizerResponse>({
      query: USER_DETAILS_ORGANIZER,
      variables: { id }
    });

    return data.organizer;
  }
);
