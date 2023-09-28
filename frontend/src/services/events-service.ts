import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents($categoryName: String!, $offset: Int!) {
    events(where: { category: { _search: $categoryName } }, first: $offset) {
      image {
        blurDataURL
        fileName
        url
      }
      date
      title
      slug
      author {
        organizerName
      }
    }
  }
`;
