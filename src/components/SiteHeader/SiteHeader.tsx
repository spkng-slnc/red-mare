import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";
import { featureDictionary } from "../../resources/featureDictionary";

export const SiteHeader: FC = () => {
  const { palette, spacing } = useTheme();

  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        color: palette.primary.main,
        borderBottom: `1px solid ${palette.primary.main}`,
      }}
      position="sticky"
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Toolbar>
          <Link
            component={RouterLink}
            variant="h5"
            to="/"
            sx={{
              letterSpacing: ".3rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            RM
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.entries(featureDictionary).map(([page, path]) => (
              <Link
                component={RouterLink}
                to={path}
                sx={{
                  color: palette.primary.main,
                  textDecoration: "none",
                  fontFamily: "Roboto",
                  marginLeft: spacing(2),
                  marginRight: spacing(2),
                  textTransform: "uppercase",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
