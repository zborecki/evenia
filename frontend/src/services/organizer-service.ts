import { gql } from '@apollo/client';

export const AUTH_ORGANIZER = gql`
  query AuthOrganizer($id: ID!) {
    organizer (where: {id: $id}) {
      id
    }
  }
`;

export const LOG_IN_ORGANIZER = gql`
  query LogInOrganizer($email: String!, $password: String!) {
    organizersConnection(where: { email: $email, AND: { password: $password } }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

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

export const USER_DETAILS_ORGANIZER = gql`
  query UserDetailsOrganizer($id: ID!) {
    organizer (where: {id: $id}) {
      email,
      fullName,
      id,
      password
    }
  }
`;
