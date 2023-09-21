import { gql } from '@apollo/client';

export const MUTATE_ORGANIZER = gql`
  mutation MutateOrganizer($email: String!, $fullName: String!, $password: String!) {
    createOrganizer(
      data: {
        email: $email, 
        fullName: $fullName,
        password: $password
      }
    ) {
      id
    }
    publishOrganizer(where: {email: $email}, to: PUBLISHED) {
      createdAt
    }
  }
`;
