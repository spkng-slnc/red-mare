import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, useTheme } from "@mui/material";
import Link from "@mui/material/Link";

import { RedMare } from "../Svgs/RedMare";

export const SiteHeader: FC = () => {
  const { palette } = useTheme();

  return (
    <AppBar color="transparent" position="sticky">
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Toolbar>
          <Link
            component={RouterLink}
            variant="h5"
            to="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}>
            <RedMare height="60px" width="60px" fill={palette.secondary.main} />
          </Link>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <StyledLink path="/" title="Home" />
            <StyledLink path="/appraisals" title="Appraisals" />
            <StyledLink path="/coaching" title="Coaching" />
            <StyledLink path="/sales-and-leasing" title="Sales & Leasing" />
            <StyledLink path="/training" title="Training" />
            <StyledLink path="/about-me" title="About" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledLink: FC<{ path: string; title: string }> = ({ path, title }) => {
  const { palette, spacing } = useTheme();

  return (
    <Link
      key={path}
      component={RouterLink}
      to={path}
      sx={{
        color: palette.primary.main,
        fontFamily: "Roboto",
        marginLeft: spacing(2),
        marginRight: spacing(2),
        textDecoration: "none",
        textTransform: "uppercase",
      }}>
      {title}
    </Link>
  );
};
