import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "https://the-linkmanager.herokuapp.com/linkmanager/"
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default apolloClient;
