import { graphQLClient } from '#libraries/apollo-client';
import { GET_TICKETS_QUERY } from '#queries/tickets';
import { GetTicketsResponse } from '#types/responses';

export const getTickets = async (userId: string) => {
  const { organizer } = (await graphQLClient().query<GetTicketsResponse>({
    query: GET_TICKETS_QUERY,
    variables: {
      userId
    }
  })).data;

  return {
    tickets: organizer.tickets
  };
};
