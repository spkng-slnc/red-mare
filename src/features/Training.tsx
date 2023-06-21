import { useState } from "react";
import { Box, Button } from "@mui/material";

import { InquiryDialog } from "../components/Dialogs/InquiryDialog";
import { FeatureTemplate } from "../components/Templates/FeatureTemplate";

const P1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada. Sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.";

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
      copy={[P1]}
      title={"Training"}
      interaction={
        <>
          <Box display="flex" justifyContent="center" my={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}>
              Inquire
            </Button>
          </Box>
          <InquiryDialog open={openDialog} onClose={handleCloseDialog} />
        </>
      }
    />
  );
};
