import { cookies } from 'next/headers';

import { AUTH_ORGANIZER } from '#/services/organizer-service';
import { COOKIE } from '#constants/keys';
import { apolloClient } from '#libraries/apollo-client';
import { AuthOrganizerResponse } from '#props/services';

export const useAuthServer = async () => {
  const authToken = cookies().get(COOKIE.AUTH);
  const { data: { organizer } } = await apolloClient().query<AuthOrganizerResponse>({
    query: AUTH_ORGANIZER,
    variables: { id: authToken?.value ?? '' }
  });

  return {
    organizer
  };
};
