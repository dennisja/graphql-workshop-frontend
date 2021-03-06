import gql from "graphql-tag";

const GET_LINKS_QUERY = gql`
  query getLinks {
    links {
      id
      url
      title
      postedBy {
        id
        firstName
        lastName
        username
      }
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

const SEARCH_LINKS_QUERY = gql`
query SearchLinks{
  # put search query here
  search{
    id
    url
    title
  }
}
`;

export { GET_LINKS_QUERY, GET_USERS_QUERY , SEARCH_LINKS_QUERY};
