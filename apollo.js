import { ApolloCache, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloCache({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
