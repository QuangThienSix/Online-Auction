import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import usersApi from 'api/usersApi';
import { InputField } from 'components/FormField';
import { ForgotPayload } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { addSingle } from 'utils';
export interface ForgotFormProps {
  initialValue?: ForgotPayload;
  onSubmit?: (formValue: ForgotPayload) => void;
}
const schema = yup.object().shape({
  tokenMail: yup.string().required('Password is required'),
  newpassword: yup.string().required('Password is required'),
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
});

export default function ForgotForm({ initialValue, onSubmit }: ForgotFormProps) {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = useForm<ForgotPayload>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: ForgotPayload) => {
    await onSubmit?.(formValue);
  };
  const handleSendOTP = async () => {
    try {
      const data = {
        email: getValues('email') ? getValues('email') : ''
      }
      await usersApi.sendOTP(data);
      // Toast success
      addSingle('success', 'OTP  Send Email successfully!');

      // Redirect back to user list
    } catch (error: any) {
      addSingle(
        'error',
        'Failed OTP  Send Email!'
      );
    }
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="email" control={control} label="Email" />
        <Button variant="contained" color="primary" onClick={() => handleSendOTP()}>
          Send OTP
        </Button>
        <InputField name="tokenMail" control={control} label="OTP" />
        <InputField name="newpassword" control={control} label="Newpassword" />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Forgot
          </Button>
        </Box>
      </form>
    </Box>
  );
}
