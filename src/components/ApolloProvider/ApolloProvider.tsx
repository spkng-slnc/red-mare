import { PropsWithChildren } from "react";
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "localhost:3000",
  cache: new InMemoryCache(),
});

export const ApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};
