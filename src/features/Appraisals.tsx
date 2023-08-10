import { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/system/Box";

import { AppointmentDialog } from "../components/Dialogs/AppointmentDialog";
import { FeatureTemplate } from "../components/Templates/FeatureTemplate";

const P1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec feugiat nisl pretium fusce id. Enim neque volutpat ac tincidunt. Ullamcorper velit sed ullamcorper morbi. Nisl purus in mollis nunc. Nullam vehicula ipsum a arcu cursus vitae congue. Egestas fringilla phasellus faucibus scelerisque. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. A scelerisque purus semper eget. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Tristique senectus et netus et malesuada fames ac turpis egestas. Id leo in vitae turpis massa sed elementum. Sit amet justo donec enim diam vulputate ut pharetra. Erat velit scelerisque in dictum non consectetur a erat. Id cursus metus aliquam eleifend mi in nulla. Pellentesque sit amet porttitor eget dolor. Eget egestas purus viverra accumsan. Tincidunt arcu non sodales neque sodales ut etiam.";
const P2 =
  "Quam viverra orci sagittis eu volutpat odio facilisis. Dignissim convallis aenean et tortor. Velit egestas dui id ornare arcu. Mauris a diam maecenas sed enim ut. Vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet dictum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Massa tincidunt dui ut ornare lectus. Praesent tristique magna sit amet purus. Leo vel fringilla est ullamcorper eget nulla. Quis eleifend quam adipiscing vitae proin sagittis nisl. Dignissim enim sit amet venenatis urna cursus. Quis risus sed vulputate odio ut enim blandit volutpat. Sed arcu non odio euismod lacinia at. Tellus orci ac auctor augue mauris. Vitae ultricies leo integer malesuada nunc. Tempor orci eu lobortis elementum nibh tellus molestie. Lectus proin nibh nisl condimentum. Maecenas pharetra convallis posuere morbi leo urna. Accumsan tortor posuere ac ut consequat semper.";

export const Appraisals = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <FeatureTemplate
      title="Appraisals"
      copy={[P1, P2]}
      interaction={
        <>
          <Box display="flex" justifyContent="center" my={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenDialog}>
              Request an appointment
            </Button>
          </Box>
          <AppointmentDialog open={openDialog} onClose={handleCloseDialog} />
        </>
      }
    />
  );
};
