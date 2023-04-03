import { Box, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container sx={{ height: "100%" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        height="100%"
      >
        <Typography variant="h1" letterSpacing="0.1em" sx={{ fontSize: "9em" }}>
          RedMare
        </Typography>
        <Typography variant="h2">Equine Consulting and Appraisals</Typography>
      </Box>
    </Container>
  );
};
