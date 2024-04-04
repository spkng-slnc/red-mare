import { useState } from "react";
import { Box, Button } from "@mui/material";

import { InquiryDialog } from "../components/Dialogs/InquiryDialog";
import { FeatureTemplate } from "../components/Templates/FeatureTemplate";

// groudwork or ground work?
const P1 =
  "Red Mare offers a well rounded training program that will develop a responsive and kind performance horse. Your horse will receive extensive ground work, be attentive and respectful in hand as well as under saddle.";
const P2 =
  "Horses require consistency to perform at their best. Whether bringing your horse back into work after a break, laying down the groundwork on a youngster, or polishing your competition mount, the solid development of any horse depends on a strong foundation. Proper conditioning and consistency is not only necessary for training success, but also imperative in preventing injury of your athlete. We tailor custom programs for your equine partner that consider all aspects of your horse’s success, including medical and nutritional needs.";

export const Training = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <FeatureTemplate
      copy={[P1, P2]}
      title={"Training"}
      interaction={
        <>
          <Box display="flex" justifyContent="center" my={{ md: 12, xs: 6 }}>
            <Button variant="contained" color="info" onClick={handleOpenDialog}>
              Inquire
            </Button>
          </Box>
          <InquiryDialog open={openDialog} onClose={handleCloseDialog} />
        </>
      }
    />
  );
};
