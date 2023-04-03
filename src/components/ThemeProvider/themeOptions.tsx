import { Shadows, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      // charcoal
      dark: "#2E3B44",
      light: "#4C616F",
      main: "#273E47",
    },
    secondary: {
      // rust
      dark: "#9F380C",
      light: "#E25011",
      main: "#B1492F",
    },
    error: {
      // burgundy
      dark: "#6D001B",
      light: "#B6002E",
      main: "#721121",
    },
    warning: {
      // pumpkin
      dark: "#F06000",
      light: "#FF893A",
      main: "#F0803C",
    },
    success: {
      // dark slate gray
      dark: "#294444",
      light: "#447272",
      main: "#384D48",
    },
    info: {
      // vanilla
      dark: "#ECD477",
      light: "#F5E8B6",
      main: "#E1D89F",
    },
  },
  shadows: Array(25).fill("none") as Shadows,
  typography: {
    h1: {
      color: "#B1492F",
    },
    h2: {
      color: "#273E47",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: ({ theme }) => theme.palette.info.main,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        color: "secondary",
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2E3B44",
        },
      },
    },
  },
};
