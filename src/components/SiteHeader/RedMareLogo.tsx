import { FC } from "react";
import { Box, BoxProps, useTheme } from "@mui/material";
import { useColorModeContext } from "src/contexts/ColorMode/ColorModeContext";

import { RedMare } from "../Svgs/RedMare";

export const Stacked: FC<BoxProps> = ({ ...boxProps }) => {
  const { palette } = useTheme();
  const { colorMode } = useColorModeContext();
  const isLightMode = Boolean(colorMode === "light");

  return (
    <Box
      component="span"
      maxHeight="60px"
      maxWidth="60px"
      display="block"
      whiteSpace="nowrap"
      {...boxProps}>
      <Box component="span">
        <RedMare
          fill={isLightMode ? palette.secondary.dark : palette.success.dark}
          height="60px"
          width="60px"
          transform="translate(-2, 2)"
        />
      </Box>
      <Box component="span">
        <RedMare
          fill={palette.primary[isLightMode ? "main" : "light"]}
          height="60px"
          width="60px"
          transform="translate(-60)"
        />
      </Box>
    </Box>
  );
};

export const Flat: FC<BoxProps> = ({ ...boxProps }) => {
  const { palette } = useTheme();
  const { colorMode } = useColorModeContext();
  const isLightMode = Boolean(colorMode === "light");

  return (
    <Box component="span" height="60px" width="60px" {...boxProps}>
      <RedMare
        fill={palette.primary[isLightMode ? "main" : "light"]}
        height="60px"
        width="60px"
      />
    </Box>
  );
};
