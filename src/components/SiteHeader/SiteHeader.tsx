import { FC, useCallback, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useColorModeContext } from "src/contexts/ColorMode";

import { Stacked } from "./RedMareLogo";

const publicFeatures = [
  { pathname: "/appraisals", title: "Appraisals" },
  { pathname: "/coaching", title: "Coaching" },
  { pathname: "/training", title: "Training" },
  { pathname: "/about-me", title: "About" },
];

export const SiteHeader: FC = () => {
  const { colorMode, toggleColorMode } = useColorModeContext();
  const [navDrawerOpen, setNavDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleNavDrawerClose = useCallback(() => setNavDrawerOpen(false), []);
  const handleNavDrawerOpen = useCallback(() => setNavDrawerOpen(true), []);

  return (
    <AppBar>
      <Container disableGutters maxWidth="xl">
        <Toolbar disableGutters>
          <Link component={RouterLink} to="/">
            <Stacked />
          </Link>
          <Box sx={{ display: { md: "flex", xs: "none" }, flexGrow: 1 }}>
            {publicFeatures.map(({ pathname, title }) => {
              return <StyledLink key={title} path={pathname} title={title} />;
            })}
          </Box>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <IconButton
              aria-label="color mode toggle"
              onClick={toggleColorMode}
              size="large">
              {colorMode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Box>

          {/** XS Layout */}
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              flexGrow: 1,
              justifyContent: "end",
            }}>
            <Drawer
              anchor="right"
              open={navDrawerOpen}
              id="drawer-appbar"
              onClose={handleNavDrawerClose}>
              <Link
                to="/"
                component={RouterLink}
                onClick={handleNavDrawerClose}
                sx={{ textDecoration: "none" }}>
                <Typography
                  p={2}
                  variant="h4"
                  sx={{
                    fontWeight: 300,
                  }}>
                  Red Mare
                </Typography>
              </Link>
              <Divider />
              {publicFeatures.map(({ pathname, title }) => (
                <MenuItem
                  key={title}
                  onClick={handleNavDrawerClose}
                  sx={{ display: "flex", justifyContent: "center" }}>
                  <StyledLink path={pathname} title={title} />
                </MenuItem>
              ))}
              <MenuItem
                key="color-mode-toggle"
                onClick={handleNavDrawerClose}
                sx={{ display: "flex", justifyContent: "center" }}>
                <IconButton
                  aria-label="color mode toggle"
                  onClick={toggleColorMode}
                  size="large">
                  {colorMode === "light" ? <DarkMode /> : <LightMode />}
                </IconButton>
              </MenuItem>
            </Drawer>
            <IconButton
              size="large"
              aria-controls="drawer-appbar"
              aria-haspopup="true"
              onClick={handleNavDrawerOpen}>
              <MenuIcon />
            </IconButton>
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
        color: palette.secondary.main,
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
