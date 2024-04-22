import { FC } from "react";
import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Typography, useTheme } from "@mui/material";

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
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="md"
      scroll="body"
      onClose={onClose}
      sx={{ height: "70vh" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={{ md: 4, xs: 2 }}
        mt={{ md: 4, xs: 2 }}>
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight="400"
          letterSpacing={2}
          ml={1}>
          Inquire
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      {Boolean(prompt) && (
        <Box>
          <Typography>{prompt}</Typography>
        </Box>
      )}

      <Box padding={4}>
        <InquiryForm />
      </Box>
    </Dialog>
  );
};
