import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { useWindowSize } from "../../utils/useWindowSize";
import { InquiryForm } from "../Forms/InquiryForm";

interface InquiryDialogProps {
  open: boolean;
  onClose: () => void;
  prompt?: string;
}

export const InquiryDialog: FC<InquiryDialogProps> = ({
  open,
  onClose,
  prompt,
}) => {
  const { palette } = useTheme();
  const { height } = useWindowSize();

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      scroll="body"
      onClose={onClose}
      sx={{ height: `${height * 7}` }}
    >
      <Box display="flex" justifyContent="flex-end" mx={2} mt={1}>
        {Boolean(prompt) && <Typography>{prompt}</Typography>}
        <IconButton onClick={onClose}>
          <Close fill={palette.primary.light} />
        </IconButton>
      </Box>

      <Box padding={2}>
        <InquiryForm />
      </Box>
    </Dialog>
  );
};
