import { graphQLClient } from '#libraries/apollo-client';
import { GET_TICKET_PREVIEW_QUERY, GET_TICKETS_QUERY } from '#queries/tickets';
import { GetTicketPreviewResponse, GetTicketsResponse } from '#types/responses';

export const getTicketPreview = async (userId: string, eventId: string) => {
  const { organizer } = (await graphQLClient().query<GetTicketPreviewResponse>({
    query: GET_TICKET_PREVIEW_QUERY,
    variables: {
      eventId,
      userId
    }
  })).data;

  return {
    email: organizer.email,
    ticket: {
      ...organizer.tickets[0].event,
      isPaid: organizer.tickets[0].isPaid
    }
  };
};

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
