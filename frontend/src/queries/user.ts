import { gql } from '@apollo/client';

export const GET_AUTHORIZED_USER_BY_ID_QUERY = gql`
  query GetAuthorizedUserById($id: ID!) {
    organizer (where: {id: $id}) {
      id
    }
  }
`;

export const GET_LOGGED_IN_USER_QUERY = gql`
  query GetLoggedInUser($email: String!, $password: String!) {
    organizersConnection(where: { email: $email, AND: { password: $password } }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const POST_USER_QUERY = gql`
  mutation PostUser($email: String!, $fullName: String!, $password: String!) {
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

export const GET_USER_DETAILS_QUERY = gql`
  query GetUserDetails($id: ID!) {
    organizer (where: {id: $id}) {
      avatar {
        url
      }
      email
      fullName
      id
      password
    }
  }
`;
