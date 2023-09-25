import { GET_CATEGORIES } from '#/services/categories-service';
import { apolloClient } from '#libraries/apollo-client';
import { CategoriesResponse } from '#props/services';

export const getCategories = async () => (
  await apolloClient().query<CategoriesResponse>({ query: GET_CATEGORIES })
).data;
