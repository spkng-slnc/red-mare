import { Shadows, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#273E47",
    },
    secondary: {
      main: "#B1492F",
    },
    error: {
      main: "#721121",
    },
    warning: {
      main: "#F0803C",
    },
    success: {
      main: "#384D48",
    },
    info: {
      main: "#E1D89F",
    },
  },
  shadows: Array(25).fill("none") as Shadows,
};
