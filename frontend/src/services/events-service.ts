import { gql } from '@apollo/client';

export const GET_EVENTS_BY_ID = gql`
  query GetEventsById($categoryId: String!, $offset: Int!) {
    events(where: { category: { _search: $categoryId } }, first: $offset) {
      image {
        fileName
        url
      }
      date
      title
      author {
        organizerName
      }
    }
  }
`;
