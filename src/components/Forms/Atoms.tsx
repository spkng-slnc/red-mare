import { FC, forwardRef } from "react";
import styled from "@emotion/styled";
import { Box, BoxProps, TextField, TextFieldProps } from "@mui/material";

type FormWrapperProps = Omit<
  BoxProps,
  "component" | "display" | "flexDirection" | "flex" | "padding"
>;

export const FormWrapper: FC<FormWrapperProps> = ({ children, ...rest }) => {
  return (
    <Box
      component="form"
      display="flex"
      flex={1}
      flexDirection="column"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      padding={0}
      {...rest}>
      {children}
    </Box>
  );
};

export const FormRow = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const FormTextInput = forwardRef<JSX.Element, TextFieldProps>(
  (props, ref) => <TextField fullWidth margin="normal" {...props} {...ref} />
);
