import { gql } from '@apollo/client';

export const GET_TICKETS_QUERY = gql`
  query GetTickets($userId: ID!) {
    organizer(where: {id: $userId}) {
      tickets {
        event {
          author {
            organizerName
          }
          date
          title
        }
        isPaid
      }
    }
  }
`;
