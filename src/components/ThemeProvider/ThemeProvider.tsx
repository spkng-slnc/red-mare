import { FC, PropsWithChildren } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { themeOptions } from "./themeOptions";

const theme = createTheme(themeOptions);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
