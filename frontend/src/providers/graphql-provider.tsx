'use client';

import { ApolloProvider } from '@apollo/client';
import { FC, PropsWithChildren } from 'react';

import { graphQLClient } from '#libraries/apollo-client';

const GraphQLProvider: FC<PropsWithChildren> = ({ children }) => {
  const client = graphQLClient();

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  );
};

export { GraphQLProvider };
