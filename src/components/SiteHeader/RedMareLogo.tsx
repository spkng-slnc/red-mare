import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, useTheme } from "@mui/material";
import { useColorModeContext } from "src/contexts/ColorMode/ColorModeContext";

import { RedMare } from "../Svgs/RedMare";

export const RedMareLogo: FC = () => {
  const { palette } = useTheme();
  const { colorMode } = useColorModeContext();
  const isLightMode = Boolean(colorMode === "light");

  return (
    <Link
      component={RouterLink}
      variant="h5"
      to="/"
      sx={{
        fontWeight: 700,
        letterSpacing: ".3rem",
        textDecoration: "none",
        whiteSpace: "nowrap",
        width: "60px",
      }}>
      <RedMare
        fill={isLightMode ? palette.secondary.dark : palette.info.dark}
        height="60px"
        width="60px"
      />
      <RedMare
        fill={palette.secondary[isLightMode ? "main" : "light"]}
        height="60px"
        width="60px"
        transform="translate(-58, -1)"
      />
    </Link>
  );
};
