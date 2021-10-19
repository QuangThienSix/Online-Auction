import Box from '@mui/material/Box';
import { Users } from 'models';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from 'components/FormField';
import { Alert, Button, CircularProgress } from '@mui/material';
import { LoginPayload } from '../authSlice';

export interface LoginFormProps {
  initialValue?: LoginPayload;
  onSubmit?: (formValue: Users) => void;
}

export default function LoginForm({ initialValue, onSubmit }: LoginFormProps) {
  const [error, setError] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Users>({
    defaultValues: initialValue,
  });

  const handleFormSubmit = async (formValue: Users) => {
    try {
      setError('');
      await onSubmit?.(formValue);
    } catch (error: any) {
      setError(error?.message);
    }
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="username" control={control} label="Username" />
        <InputField name="password" control={control} label="Password" />
        {error && <Alert severity="error">{error}</Alert>}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Login
          </Button>
        </Box>
      </form>
    </Box>
  );
}
