import { gql } from '@apollo/client';

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
