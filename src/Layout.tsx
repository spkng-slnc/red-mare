import { FC } from "react";
import { Outlet } from "react-router-dom";

import { ApolloProvider } from "./components/ApolloProvider/ApolloProvider";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

export const Layout: FC = () => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <SiteHeader />
        <Outlet />
      </ThemeProvider>
    </ApolloProvider>
  );
};
