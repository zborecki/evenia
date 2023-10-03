import { graphQLClient } from '#libraries/apollo-client';
import { GET_PARTNERS_QUERY } from '#queries/partners';
import { GetPartnersResponse } from '#types/responses';

export const getPartners = async () => (
  await graphQLClient().query<GetPartnersResponse>({
    query: GET_PARTNERS_QUERY
  })
).data;
