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
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx={4}
        mt={4}
      >
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight="400"
          letterSpacing={2}
          color={palette.primary.main}
          ml={1}
        >
          Inquire
        </Typography>
        <IconButton onClick={onClose} color="primary">
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
