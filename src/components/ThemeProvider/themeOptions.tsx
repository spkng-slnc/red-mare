import {
  PaletteOptions,
  Shadows,
  SimplePaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";
import { ColorMode } from "src/contexts/ColorMode/ColorModeContext";

export const themeOptions: (mode: ColorMode) => ThemeOptions = (mode) => ({
  components: {
    MuiButton: {
      styleOverrides: {
        textPrimary: ({ theme }) => theme.palette.info.main,
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#2E3B44",
        },
      },
    },
    MuiSvgIcon: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiTextField: {
      defaultProps: {
        color: "secondary",
        variant: "standard",
      },
    },
  },
  mode,
  palette: mode == "light" ? lightPalette : darkPalette,
  shadows: Array(25).fill("none") as Shadows,
  typography: {
    h1: {
      color:
        mode == "light"
          ? (lightPalette.secondary as SimplePaletteColorOptions)!.main
          : (darkPalette.secondary as SimplePaletteColorOptions)!.light,
    },
    h2: {
      color:
        mode == "light"
          ? (lightPalette.primary as SimplePaletteColorOptions)!.main
          : (darkPalette.primary as SimplePaletteColorOptions)!.main,
    },
  },
});

const burgundy = {
  dark: "#590D1A",
  light: "#9B172D",
  main: "#721121",
};
const moss = {
  dark: "#202C2A",
  light: "#56766f",
  main: "#384D48",
};
const pumpkin = {
  dark: "#D55C10",
  light: "#F6B288",
  main: "#F0803C",
};
const rust = {
  dark: "#9F380C",
  light: "#cf644a",
  main: "#B1492F",
};
const slate = {
  dark: "#1b2b31",
  light: "#365663",
  main: "#273E47",
};
const vanilla = {
  dark: "#E1D89F",
  light: "#f9f7ec",
  main: "#ede7c5",
};

const darkPalette: PaletteOptions = {
  background: {
    default: moss.main,
  },
  error: {
    contrastText: vanilla.light,
    ...burgundy,
  },
  info: {
    contrastText: vanilla.light,
    ...slate,
  },
  primary: {
    contrastText: slate.dark,
    ...vanilla,
  },
  secondary: {
    contrastText: vanilla.light,
    ...rust,
  },
  success: {
    contrastText: vanilla.light,
    ...moss,
  },
  warning: {
    contrastText: vanilla.light,
    ...pumpkin,
  },
};
const lightPalette: PaletteOptions = {
  background: {
    default: vanilla.light,
  },
  error: {
    contrastText: vanilla.light,
    ...burgundy,
  },
  info: {
    contrastText: slate.dark,
    ...vanilla,
  },
  primary: {
    contrastText: vanilla.light,
    ...slate,
  },
  secondary: {
    ...rust,
  },
  success: {
    contrastText: vanilla.light,
    ...moss,
  },
  warning: {
    contrastText: moss.light,
    ...pumpkin,
  },
};
