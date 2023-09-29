import { gql } from '@apollo/client';

export const GET_PAGINATED_EVENTS_QUERY = gql`
  query GetPaginatedEvents($first: Int!, $skip: Int!, $categoryName: String!) {
    eventsConnection(first: $first, skip: $skip, where: {_search: $categoryName}) {
      edges {
        node {
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
      pageInfo {
        hasNextPage
      }
    }
  }
`;
