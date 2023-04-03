import { FC } from "react";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <ThemeProvider>
      <SiteHeader />
      <Outlet />
    </ThemeProvider>
  );
};
