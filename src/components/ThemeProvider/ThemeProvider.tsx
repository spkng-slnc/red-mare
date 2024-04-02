import { FC, PropsWithChildren, useMemo } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { useColorModeContext } from "src/contexts/ColorMode/ColorModeContext";

import { themeOptions } from "./themeOptions";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorModeContext();

  const theme = useMemo(
    () => createTheme(themeOptions(colorMode)),
    [colorMode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
