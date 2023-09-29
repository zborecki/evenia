import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphQLClient = () => new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  },
  uri: process.env.NEXT_PUBLIC_API_URI
});
