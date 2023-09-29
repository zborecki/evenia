import { graphQLClient } from '#libraries/apollo-client';
import { GET_CATEGORIES_QUERY } from '#queries/categories';
import { GetCategoriesResponse } from '#types/responses';

export const getCategories = async () => (
  await graphQLClient().query<GetCategoriesResponse>({
    query: GET_CATEGORIES_QUERY
  })
).data;
