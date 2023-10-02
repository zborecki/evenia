import { createAsyncThunk } from '@reduxjs/toolkit';

import { graphQLClient } from '#libraries/apollo-client';
import { GET_USER_DETAILS_QUERY } from '#queries/user';
import { GetUserResponse } from '#types/responses';

export const GET_AUTHORIZED_USER_BY_ID = createAsyncThunk(
  'user/GET_AUTHORIZED_USER_BY_ID',
  async (id: string) => {
    const { data } = await graphQLClient().query<GetUserResponse>({
      query: GET_USER_DETAILS_QUERY,
      variables: { id }
    });

    return data.organizer;
  }
);
