import { gql } from '@apollo/client';

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
