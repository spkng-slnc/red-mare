import { FC } from "react";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Outlet } from "react-router-dom";
import { ApolloProvider } from "./components/ApolloProvider/ApolloProvider";

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
