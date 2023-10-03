import { gql } from '@apollo/client';

export const GET_PARTNERS_QUERY = gql`
  query GetPartners {
    partners {
      companyName
      logo {
        url
      }
      url
    }
  }
`;
