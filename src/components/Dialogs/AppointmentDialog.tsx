import { Button, Dialog, IconButton } from "@mui/material";
import Box from "@mui/system/Box";
import { FC } from "react";
import { Close } from "@mui/icons-material";
import { useWindowSize } from "../../utils/useWindowSize";

interface AppointmentDialogProps {
  open: boolean;
  onClose: () => void;
}

const HEADER_HEIGHT = 68;

export const AppointmentDialog: FC<AppointmentDialogProps> = ({
  open,
  onClose,
}) => {
  const { height } = useWindowSize();

  return (
    <Dialog fullScreen open={open} scroll="body" onClose={onClose} keepMounted>
      <Box display="flex" justifyContent="flex-end" m={2}>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <Box>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1P8KGxScjiIBWINt9LYO6A-TjcPQ__ebhMmsN6sw28qeAq47fsvX3YznMACfhIDJqJOw-mCX_t?gv=true"
          style={{ border: "none" }}
          width="100%"
          height={height - HEADER_HEIGHT}
        ></iframe>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ marginTop: "-64px" }}
          mb={2}
        >
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};
