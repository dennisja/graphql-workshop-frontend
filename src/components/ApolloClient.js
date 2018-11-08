import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AUTH_TOKEN } from "./Constants";

const httpLink = createHttpLink({
  uri: "https://the-linkmanager.herokuapp.com/linkmanager/"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  // return headers to the context so that httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ""
    }
  };
});
const httpLinkWithAuth = authLink.concat(httpLink);

const apolloClient = new ApolloClient({
  link: httpLinkWithAuth,
  cache: new InMemoryCache()
});

export default apolloClient;
