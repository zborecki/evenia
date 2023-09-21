'use client';

import { ApolloProvider } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';

import { apolloClient } from '#libraries/apollo-client';

const GraphQLProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = apolloClient();

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  );
};

export { GraphQLProvider };
