import gql from "graphql-tag";

const GET_LINKS_QUERY = gql`
  query getLinks {
    links {
      id
      url
      title
    }
  }
`;

const GET_USERS_QUERY = gql`
  query getUsers {
    users {
      id
      firstName
      lastName
      email
      username
    }
  }
`;

export { GET_LINKS_QUERY, GET_USERS_QUERY };
