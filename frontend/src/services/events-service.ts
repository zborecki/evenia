import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents($categoryId: String!, $offset: Int!) {
    events(where: { category: { _search: $categoryId } }, first: $offset) {
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
