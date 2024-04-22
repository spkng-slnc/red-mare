import { useState } from "react";
import { Box, Button } from "@mui/material";

import { InquiryDialog } from "../components/Dialogs/InquiryDialog";
import { FeatureTemplate } from "../components/Templates/FeatureTemplate";

const P1 =
  "RedMare Equine offers riding lessons focusing on hunt seat and jumping instruction for children and adults in either a group, a small group, or through private lessons.";
const P2 =
  "We focus on our riders in an individualized setting that allows each student to achieve success quickly and with confidence. We specialize in the development of both the horse and rider, teaching and training for all levels of competition from local to national level shows. We strive to build confidence in the rider by holding safety, good horsemanship and the ability to problem solve as the key tenets to our lesson program, with additional focus on rider fitness, body awareness, and adaptability. Although participation in our program does not require that riders participate in horse shows, the curriculum is geared towards preparing riders for success in the show ring.";
const P3 =
  "Coaching is available to riders on owned or leased horses. School horses are very limited. We are currently accepting new clients.";

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
      copy={[P1, P2, P3]}
      title={"Coaching"}
      interaction={
        <>
          <Box display="flex" justifyContent="center" my={{ md: 12, xs: 6 }}>
            <Button variant="contained" onClick={handleOpenDialog}>
              Inquire
            </Button>
          </Box>
          <InquiryDialog open={openDialog} onClose={handleCloseDialog} />
        </>
      }
    />
  );
};
