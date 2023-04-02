import { FC, PropsWithChildren } from "react";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

export const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <SiteHeader />
      {children}
    </ThemeProvider>
  );
};
