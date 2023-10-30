import { FC } from "react";
import { Box } from "@mui/material";
import { LoginForm } from "src/components/Forms/LoginForm";

export const AdminLogin: FC = () => {
  return (
    <Box display="flex" flex={1} justifyContent="center" m={[2, 4]}>
      <LoginForm maxWidth={600} onSubmit={(data) => console.log(data)} />
    </Box>
  );
};
