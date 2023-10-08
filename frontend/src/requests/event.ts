import { graphQLClient } from '#libraries/apollo-client';
import { GET_EVENT_BY_SLUG_QUERY } from '#queries/event';
import { GetEventBySlugResponse } from '#types/responses';

export const getEventBySlug = async (slug: string) => (
  await graphQLClient().query<GetEventBySlugResponse>({
    query: GET_EVENT_BY_SLUG_QUERY,
    variables: { slug }
  })
).data;
