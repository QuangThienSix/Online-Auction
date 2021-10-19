import Box from '@mui/material/Box';
import { Users } from 'models';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField, RadioGroupField } from 'components/FormField';
import { Alert, Button, CircularProgress } from '@mui/material';
export interface RegisFormProps {
  initialValue?: Users;
  onSubmit?: (formValue: Users) => void;
}

export default function RegisForm({ initialValue, onSubmit }: RegisFormProps) {
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
      setError(error.message);
    }
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="username" control={control} label="Username" />
        <InputField name="password" control={control} label="Password" />
        <InputField name="fullname" control={control} label="Fullname" />
        <InputField name="address" control={control} label="Address" />
        <InputField name="email" control={control} label="Email" />
        <RadioGroupField
          name="roles_id"
          control={control}
          defaultValue="2"
          options={[
            { label: 'Guest', value: '2' },
            { label: 'Bidder', value: '3' },
            { label: 'Seller', value: '4' },
          ]}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Register
          </Button>
        </Box>
      </form>
    </Box>
  );
}
