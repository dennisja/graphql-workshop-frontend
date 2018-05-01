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

export { GET_LINKS_QUERY };
