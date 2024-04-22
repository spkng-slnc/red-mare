import { Box, Container, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        height="90vh">
        <Typography
          textAlign="end"
          variant="h1"
          letterSpacing={{ md: "0.166em", xs: "unset" }}
          sx={{ fontSize: { md: "10em", xs: "5em" } }}>
          RedMare
        </Typography>
        <Typography
          textAlign="end"
          variant="h2"
          sx={{ fontSize: { md: "6em", xs: "2em" }, fontWeight: 200 }}>
          Equine Consulting and Appraisals
        </Typography>
      </Box>
    </Container>
  );
};
