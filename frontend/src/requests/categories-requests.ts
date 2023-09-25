import { GET_CATEGORIES } from '#/services/categories-service';
import { apolloClient } from '#libraries/apollo-client';
import { GetCategoriesResponse } from '#props/services';

export const getCategories = async () => (
  await apolloClient().query<GetCategoriesResponse>({ query: GET_CATEGORIES })
).data;
