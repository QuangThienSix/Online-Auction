import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import { InputField } from 'components/FormField';
import { ChangePass } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
export interface ChangePassFormProps {
  initialValue?: ChangePass
  onSubmit?: (formValue: ChangePass) => void;
}

const schema = yup.object().shape({
  oldpassword: yup.string().required('Oldpassword is required'),
  newpassword: yup.string().required('Newpassword is required'),
});

export default function ChangePassWord({ initialValue, onSubmit }: ChangePassFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ChangePass>({
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValue: ChangePass) => {
    await onSubmit?.(formValue);
  };
  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="oldpassword" type="password" control={control} label="Oldpassword" />
        <InputField name="newpassword" type="password" control={control} label="Newpassword" />
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting && <CircularProgress size={16} color="primary" />}&nbsp;Change Password
          </Button>
        </Box>
      </form>
    </Box>
  );
}
