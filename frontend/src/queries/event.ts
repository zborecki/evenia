import { gql } from '@apollo/client';

export const GET_EVENT_BY_SLUG_QUERY = gql`
  query GetEventBySlug($slug: String!) {
    event (where: {slug: $slug}) {
      author {
        organizerName
      }
      date
      description
      details
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
