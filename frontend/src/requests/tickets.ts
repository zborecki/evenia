import { graphQLClient } from '#libraries/apollo-client';
import { GET_TICKETS_QUERY } from '#queries/tickets';
import { GetTicketsResponse } from '#types/responses';

export const getTickets = async (userId: string, first?: number, skip?: number) => {
  const { organizersConnection } = (await graphQLClient().query<GetTicketsResponse>({
    query: GET_TICKETS_QUERY,
    variables: {
      first: first ?? 9,
      skip: skip ?? 0,
      userId
    }
  })).data;

  const { node } = organizersConnection.edges[0];

  return {
    tickets: node.tickets
  };
};
