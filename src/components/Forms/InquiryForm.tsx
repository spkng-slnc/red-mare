import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

import { FormRow, FormTextInput, FormWrapper } from "./Atoms";

interface InquiryFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const InquiryForm = () => {
  const { register, handleSubmit } = useForm<InquiryFormValues>();
  return (
    <FormWrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <FormRow>
        <FormTextInput required label="First Name" {...register("firstName")} />
        <FormTextInput label="Last Name" {...register("lastName")} />
      </FormRow>

      <FormRow>
        <FormTextInput
          required
          type="email"
          label="Email"
          {...register("email")}
        />
        <FormTextInput
          required
          type="tel"
          label="Phone"
          {...register("phone")}
        />
      </FormRow>

      <FormRow>
        {/* TODO: Limit the number of characters to 500 */}
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

      <FormRow mt={6}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormRow>
    </FormWrapper>
  );
};
