import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";
import { PropsWithChildren } from "react";

const client = new ApolloClient({
  uri: "localhost:3000",
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
