import { gql } from '@apollo/client';

export const BUY_TICKET_QUERY = gql`
  mutation BuyTicket($userId: ID!, $eventId: ID!) {
    updateOrganizer (
      data: {
        tickets: {
          create: {
            data: {
              event: { connect: { id: $eventId } },
              isPaid: false
            }
          }
        }
      }
      where: {id: $userId}
    ) {
      updatedAt
    }
    publishOrganizer(where: {id: $userId}) {
      updatedAt
    }
  }
`;

export const GET_TICKET_PREVIEW_QUERY = gql`
  query GetTicketPreview($userId: ID!, $eventId: ID!) {
    organizer(where: {id: $userId}) {
      email
      tickets(where: {event: {id: $eventId}}) {
        event {
          author {
            organizerName
          }
          date
          image {
            fileName
            url
          }
          price
          title
        }
        isPaid
      }
    }
  }
`;

export const GET_TICKETS_QUERY = gql`
  query GetTickets($userId: ID!, $first: Int!, $skip: Int!) {
    organizersConnection(where: {id: $userId}) {
      edges {
        node {
          tickets(first: $first, skip: $skip) {
            event {
              author {
                organizerName
              }
              date
              id
              image {
                fileName
                url
              }
              title
            }
            isPaid
          }
        }
      }
    }
  }
`;
