import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

export type ColorMode = "light" | "dark";

interface ColorModeContext {
  toggleColorMode: () => void;
  colorMode: ColorMode;
}

const ColorModeContext = createContext({
  colorMode: "dark",
  toggleColorMode: () => {},
} as ColorModeContext);

export const ColorModeContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const colorMode = useMemo(
    () => ({
      colorMode: mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorModeContext() {
  return useContext(ColorModeContext);
}
