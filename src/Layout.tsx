import { FC } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ColorModeContextProvider } from "./contexts/ColorMode";
import { ThemeProvider } from "./contexts/ThemeProvider";

export const Layout: FC = () => {
  return (
    <ColorModeContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <SiteHeader />
        <Outlet />
      </ThemeProvider>
    </ColorModeContextProvider>
  );
};
