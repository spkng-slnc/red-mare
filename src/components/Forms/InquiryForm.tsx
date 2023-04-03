import styled from "@emotion/styled";
import { Box, Button, TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";

interface InquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const FormTextInput = forwardRef<JSX.Element, TextFieldProps>((props, ref) => (
  <TextField fullWidth margin="normal" {...props} {...ref} />
));

const FormRow = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const InquiryForm = () => {
  const { register, handleSubmit } = useForm<InquiryFormValues>();
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      padding={0}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <FormRow>
        <FormTextInput label="First Name" {...register("firstName")} />
        <FormTextInput label="Last Name" {...register("lastName")} />
      </FormRow>

      <FormRow>
        <FormTextInput required label="Email" {...register("email")} />
        <FormTextInput label="Phone" {...register("phone")} />
      </FormRow>

      <FormRow>
        <TextField
          required
          label="Message"
          margin="normal"
          multiline
          rows={4}
          fullWidth
          {...register("message")}
        />
      </FormRow>

      <FormRow mt={1}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormRow>
    </Box>
  );
};
