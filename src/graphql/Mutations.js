const REGISTER_USERS_MUTATION = gql`
  mutation RegisterUsers(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    createUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      user {
        id
        username
      }
    }
  }
`;

const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

const CREATE_LINK_MUTATION = gql`
  mutation CreateLink($title: String!, $url: String!) {
    createLink(url: $url, title: $title) {
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