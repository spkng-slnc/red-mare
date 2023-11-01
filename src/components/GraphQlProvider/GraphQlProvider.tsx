import { PropsWithChildren } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

export const GraphQlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
