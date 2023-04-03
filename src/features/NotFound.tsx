import { Box, Typography, useTheme } from "@mui/material";
import Container from "@mui/material/Container";

export const NotFound = () => {
  const { palette } = useTheme();
  return (
    <Container sx={{ height: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        sx={{ "&.MuiBox-root": { height: "100%" } }}
      >
        <Typography variant="h1" color={palette.primary.main}>
          404
        </Typography>
        <Typography variant="h3">Page Not Found</Typography>
        <Typography variant="h5">
          Please use the site header to continue navigation.
        </Typography>
      </Box>
    </Container>
  );
};
