import { gql } from '@apollo/client';

export const GET_EVENT_BY_SLUG_QUERY = gql`
  query GetEventBySlug($slug: String!) {
    event (where: {slug: $slug}) {
      author {
        organizerName
      }
      category {
        name
      }
      date
      description
      details
      id
      image {
        fileName
        url
      }
      location
      price
      title
    }
  }
`;
