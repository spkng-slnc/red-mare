import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { DarkMode, LightMode } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useColorModeContext } from "src/contexts/ColorMode/ColorModeContext";

import { RedMareLogo } from "./RedMareLogo";

export const SiteHeader: FC = () => {
  const { data } = useQuery(USER_AUTH_QUERY);
  const { colorMode, toggleColorMode } = useColorModeContext();
  const authId = data?.currentUser?.auth.id;
  const adminId = import.meta.env.VITE_ADMIN_ID;
  const { palette } = useTheme();

  return (
    <AppBar color="transparent" position="sticky">
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          width: "100%",
        }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}>
          <RedMareLogo />
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <StyledLink path="/appraisals" title="Appraisals" />
            <StyledLink path="/coaching" title="Coaching" />
            {adminId && adminId === authId && (
              <StyledLink path="/sales-and-leasing" title="Sales & Leasing" />
            )}
            <StyledLink path="/training" title="Training" />
            <StyledLink path="/about-me" title="About" />
          </Box>
          <IconButton onClick={toggleColorMode}>
            {colorMode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
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

const USER_AUTH_QUERY = gql`
  query UserAuthQuery {
    currentUser {
      auth {
        id
      }
    }
  }
`;
