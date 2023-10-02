import { cookies } from 'next/headers';

import { COOKIE } from '#constants/keys';
import { graphQLClient } from '#libraries/apollo-client';
import { GET_AUTHORIZED_USER_BY_ID_QUERY } from '#queries/user';
import { GetAuthResponse } from '#types/responses';

export const useAuthServer = async () => {
  const authToken = cookies().get(COOKIE.AUTH);
  const { data: { organizer } } = await graphQLClient().query<GetAuthResponse>({
    query: GET_AUTHORIZED_USER_BY_ID_QUERY,
    variables: { id: authToken?.value ?? '' }
  });

  return {
    organizer
  };
};
