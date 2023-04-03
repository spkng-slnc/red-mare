import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton } from "@mui/material";
import { FC } from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import { InquiryForm } from "../Forms/InquiryForm";

interface InquiryDialogProps {
  open: boolean;
  onClose: () => void;
}

export const InquiryDialog: FC<InquiryDialogProps> = ({ open, onClose }) => {
  const { height } = useWindowSize();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="lg"
      scroll="body"
      onClose={onClose}
      sx={{ height: `${height * 7}` }}
    >
      <Box display="flex" justifyContent="flex-end" mx={2} mt={1}>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Box padding={2}>
        <InquiryForm />
      </Box>
    </Dialog>
  );
};
