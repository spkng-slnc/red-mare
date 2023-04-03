import { Box, Button } from "@mui/material";
import { useState } from "react";
import { InquiryDialog } from "../components/Dialogs/InquiryDialog";
import { FeatureTemplate } from "../components/Templates/FeatureTemplate";

const P1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Risus sed vulputate odio ut enim blandit. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Urna nunc id cursus metus aliquam eleifend. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Dictum non consectetur a erat nam. Habitasse platea dictumst vestibulum rhoncus. Non blandit massa enim nec dui nunc mattis. Ut placerat orci nulla pellentesque dignissim. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Est ante in nibh mauris cursus mattis molestie. Lectus quam id leo in vitae turpis massa. Viverra ipsum nunc aliquet bibendum. Auctor elit sed vulputate mi sit amet mauris commodo. Nunc scelerisque viverra mauris in aliquam.";

export const Coaching = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <FeatureTemplate
      copy={[P1]}
      title={"Coaching"}
      interaction={
        <>
          <Box display="flex" justifyContent="center" my={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}
            >
              Inquire
            </Button>
          </Box>
          <InquiryDialog open={openDialog} onClose={handleCloseDialog} />
        </>
      }
    />
  );
};
