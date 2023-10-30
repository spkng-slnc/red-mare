import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import { FormRow, FormTextInput, FormWrapper } from "./Atoms";

interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  return (
    <FormWrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <FormRow>
        <FormTextInput
          required
          type="email"
          label="Email"
          {...register("email")}
        />
      </FormRow>
      <FormRow>
        <FormTextInput
          required
          type="password"
          label="Password"
          {...register("password")}
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
